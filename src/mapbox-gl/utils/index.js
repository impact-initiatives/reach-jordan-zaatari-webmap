import store from '../../store/index.js';
import mapbox from '../../constants/mapbox.js';

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

const mapUtils = {
  addSourceToMap,
  createMap,
};

export default mapUtils;
