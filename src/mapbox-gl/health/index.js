import store from '../../store/index.js';
import { BOUNDS, MAX_BOUNDS, CONTAINER, STYLE, BEARING } from '../../constants/mapbox-gl.js';
import { addDistrictBoundaries, addBlockBoundaries, addCampFacilities } from './layers.js';
import initWatch from './geolocation.js';

const { mapboxgl } = window;

function closeSidebars() {
  store.dispatch({ type: (prevState) => {
    const state = JSON.parse(JSON.stringify(prevState));
    state.sidebarLeft.open = false;
    state.sidebarRight.open = false;
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

function addLayers(map) {
  initWatch(map);
  addDistrictBoundaries(map);
  addBlockBoundaries(map);
  addCampFacilities(map);
}

export default function () {
  const map = new mapboxgl.Map({
    container: CONTAINER,
    maxBounds: MAX_BOUNDS,
    style: STYLE,
  });
  setOptions(map);
  map.on('style.load', () => addLayers(map));
  map.on('mousedown', closeSidebars);
  map.on('movestart', closeSidebars);
}
