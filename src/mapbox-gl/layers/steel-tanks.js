import store from '../../store/index.js';
import colors from '../../constants/colors.js';
import mapbox from '../../constants/mapbox.js';
import wasteWaterFilters from '../../constants/filters/waste-water.js';
import layers from '../../constants/layers.js';
import sources from '../../constants/sources.js';
import keys from '../../constants/keys/steel-tanks.js';

function steelTanks({ map }) {
  store.subscribe(() => modifyLayer({ map }));
  map.addLayer(getLayerFeature());
  map.addLayer(getLayerLabel());
  modifyLayer({ map });
}

function getLayerFeature() {
  return {
    id: layers.STEEL_TANKS,
    paint: {
      'circle-color': colors.DARK_GREY_100,
      'circle-radius': 6.5,
      'circle-opacity': 0.8,
    },
    source: sources.STEEL_TANKS,
    type: 'circle',
  };
}

function getLayerLabel() {
  return {
    id: layers.STEEL_TANKS_TEXT,
    layout: {
      'text-anchor': 'bottom-left',
      'text-field': `{${keys.NAME}}`,
      'text-font': ['open-sans-regular'],
      'text-offset': [0.25, -0.25],
    },
    minzoom: mapbox.LABEL_ZOOM_BREAK,
    paint: {
      'text-halo-color': colors.WHITE,
      'text-halo-width': 1.5,
    },
    source: sources.STEEL_TANKS,
    type: 'symbol',
  };
}

function modifyLayer({ map }) {
  const state = store.getState();
  if (state.filters.wasteWater[wasteWaterFilters.STEEL_TANKS]) {
    map.setFilter(layers.STEEL_TANKS, ['has', keys.ID]);
    map.setFilter(layers.STEEL_TANKS_TEXT, ['has', keys.ID]);
  } else {
    const filters = state.filters.wasteWater;
    const filtersActive = Object.values(filters).includes(true);
    const searchActive = state.search.wasteWater;
    if (filtersActive || searchActive) {
      map.setFilter(layers.STEEL_TANKS, ['!has', keys.ID]);
      map.setFilter(layers.STEEL_TANKS_TEXT, ['!has', keys.ID]);
    } else {
      map.setFilter(layers.STEEL_TANKS, ['has', keys.ID]);
      map.setFilter(layers.STEEL_TANKS_TEXT, ['has', keys.ID]);
    }
  }
}

export default steelTanks;
