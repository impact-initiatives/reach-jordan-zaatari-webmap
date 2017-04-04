import store from '../../store/index.js';
import mapbox from '../../constants/mapbox.js';
import columns from '../../constants/columns/index.js';
import wasteWaterFilters from '../../constants/filters/waste-water.js';

const { mapboxgl } = window;

const options = {
  attributionControl: false,
  container: mapbox.CONTAINER,
  maxBounds: mapbox.maxBounds,
  style: mapbox.STYLE,
};

function createMap() {
  const map = new mapboxgl.Map(options);
  addOptions({ map });
  map.on('mousedown', closeSidebars);
  map.on('zoomstart', closeSidebars);
  return map;
}

function addOptions({ map }) {
  map.fitBounds(mapbox.bounds, { duration: 0 });
  map.setBearing(mapbox.BEARING);
  map.dragRotate.disable();
  map.touchZoomRotate.disableRotation();
  map.addControl(new mapboxgl.NavigationControl());
}

function closeSidebars() {
  store.dispatch({ type: (state) => ({
    ...state,
    sidebarHome: {
      ...state.sidebarHome,
      open: false,
    },
    sidebarLayers: {
      ...state.sidebarLayers,
      open: false,
    },
    sidebarInfo: {
      ...state.sidebarInfo,
      open: false,
    },
  }) });
}

function addSourceToMap({ features, map, sourceId }) {
  map.addSource(sourceId, {
    data: {
      type: 'FeatureCollection',
      features,
    },
    type: 'geojson',
  });
}

function modifySteelLayer({ map, layerId }) {
  const state = store.getState();
  if (state.filters.wasteWater[wasteWaterFilters.STEEL_TANKS]) {
    map.setFilter(layerId, ['has', columns.septicColumns.id.KEY]);
  } else {
    const filters = state.filters.wasteWater;
    const filtersActive = Object.values(filters).includes(true);
    const searchActive = state.search.wasteWater;
    if (filtersActive || searchActive) {
      map.setFilter(layerId, ['!has', columns.septicColumns.id.KEY]);
    } else {
      map.setFilter(layerId, ['has', columns.septicColumns.id.KEY]);
    }
  }
}

function modifyHouseholdsLayer({ map, layerId }) {
  const state = store.getState();
  if (state.filters.wasteWater[wasteWaterFilters.HOUSEHOLDS]) {
    map.setFilter(layerId, ['has', columns.householdColumns.id.KEY]);
  } else {
    const filters = state.filters.wasteWater;
    const filtersActive = Object.values(filters).includes(true);
    const searchActive = state.search.wasteWater;
    if (filtersActive || searchActive) {
      map.setFilter(layerId, ['!has', columns.householdColumns.id.KEY]);
    } else {
      map.setFilter(layerId, ['has', columns.householdColumns.id.KEY]);
    }
  }
}

function modifySepticLayer({ map, layerId }) {
  const state = store.getState();
  if (state.search.wasteWater) {
    filterSepticBySearch({ map, state, layerId });
  } else {
    filterSepticByType({ map, state, layerId });
  }
}

function filterSepticBySearch({ map, state, layerId }) {
  const filter = [];
  const search = state.search.wasteWater;
  for (let i = 0; i < mapbox.NUM_HOUSES; i += 1) {
    filter.push(['==', String(i), search]);
  }
  map.setFilter(layerId, ['any', ...filter]);
}

function filterSepticByType({ map, state, layerId }) {
  const storeFilter = state.filters.wasteWater;
  const mapFilter = Object.entries(storeFilter)
    .filter(([, value]) => value)
    .map(([key]) => {
      if (key.includes('8')) {
        return ['==', columns.septicColumns.volume.KEY, 8];
      } else if (key.includes('4')) {
        return ['==', columns.septicColumns.volume.KEY, 4];
      } else if (key.includes('2')) {
        return [
          'any',
          ['==', columns.septicColumns.volume.KEY, 2],
          ['==', columns.septicColumns.volume.KEY, 2.5],
        ];
      }
      return ['!has', columns.septicColumns.volume.KEY];
    });
  if (!mapFilter.length) mapFilter.push(['has', columns.septicColumns.volume.KEY]);
  map.setFilter(layerId, ['any', ...mapFilter]);
}

const mapUtils = {
  addSourceToMap,
  createMap,
  modifySteelLayer,
  modifyHouseholdsLayer,
  modifySepticLayer,
};

export default mapUtils;
