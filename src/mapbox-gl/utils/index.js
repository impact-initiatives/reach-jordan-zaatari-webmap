import store from '../../store/index.js';
import { CONTAINER, MAX_BOUNDS, STYLE, BOUNDS, BEARING } from '../../constants/mapbox-gl.js';

const { mapboxgl } = window;

const options = {
  attributionControl: false,
  container: CONTAINER,
  maxBounds: MAX_BOUNDS,
  style: STYLE,
};

function createMap() {
  const map = new mapboxgl.Map(options);
  addOptions({ map });
  map.on('mousedown', closeSidebars);
  map.on('zoomstart', closeSidebars);
  return map;
}

function addOptions({ map }) {
  map.fitBounds(BOUNDS, { duration: 0 });
  map.setBearing(BEARING);
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
  if (!map.getSource(sourceId)) {
    map.addSource(sourceId, {
      data: {
        type: 'FeatureCollection',
        features,
      },
      type: 'geojson',
    });
  }
}

export default {
  addSourceToMap,
  createMap,
};
