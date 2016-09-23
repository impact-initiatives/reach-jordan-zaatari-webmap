import store from '../../store/index.js';
import { BOUNDS, MAX_BOUNDS, CONTAINER, STYLE, BEARING } from '../../constants/mapbox-gl.js';
import addLayers from './layers.js';
import initWatch from './geolocation.js';
import initInteractions from './interactions.js';
import initHealthFacilities from './health-facilities.js';

const { mapboxgl } = window;

function closeSidebars() {
  store.dispatch({ type: (prevState) => {
    const state = JSON.parse(JSON.stringify(prevState));
    state.sidebarHome.open = false;
    state.sidebarLayers.open = false;
    state.sidebarInfo.open = false;
    return state;
  } });
}

function setOptions(map) {
  map.fitBounds(BOUNDS, { duration: 0 });
  map.setBearing(BEARING);
  map.dragRotate.disable();
  map.touchZoomRotate.disableRotation();
  map.addControl(new mapboxgl.Navigation());
}

function loadStyles(map) {
  initWatch(map);
  addLayers(map);
  initInteractions(map);
  initHealthFacilities(map);
}

export default function () {
  const map = new mapboxgl.Map({
    container: CONTAINER,
    maxBounds: MAX_BOUNDS,
    style: STYLE,
  });
  setOptions(map);
  map.on('style.load', () => loadStyles(map));
  map.on('mousedown', closeSidebars);
  map.on('movestart', closeSidebars);
}
