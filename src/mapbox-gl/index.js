import { BOUNDS, MAX_BOUNDS, ACCESS_TOKEN, CONTAINER, STYLE, BEARING,
  } from '../constants/mapbox-gl.js';
import { addDistrictBoundaries, addBlockBoundaries, addCampFacilities } from './layers.js';

const { mapboxgl } = window;

mapboxgl.accessToken = ACCESS_TOKEN;

function setOptions(map) {
  map.fitBounds(BOUNDS, { duration: 0 });
  map.setBearing(BEARING);
  map.dragRotate.disable();
  map.touchZoomRotate.disableRotation();
}

function addLayers(map) {
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
}
