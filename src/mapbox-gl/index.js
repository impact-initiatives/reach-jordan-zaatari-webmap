import { BOUNDS, MAX_BOUNDS, ACCESS_TOKEN, CONTAINER, STYLE, BEARING,
  } from '../constants/index.js';

const { mapboxgl } = window;

mapboxgl.accessToken = ACCESS_TOKEN;

function setOptions(map) {
  map.fitBounds(BOUNDS, { duration: 0 });
  map.setBearing(BEARING);
  map.dragRotate.disable();
  map.touchZoomRotate.disableRotation();
}

function addDistrictLayer(map) {
  map.addSource('district-boundaries', {
    data: '/reach/district-boundaries.geojson',
    type: 'geojson',
  });
  map.addLayer({
    id: 'district-line',
    paint: {
      'line-color': '#ffffff',
      'line-opacity': 0.8,
      'line-width': 5,
    },
    source: 'district-boundaries',
    type: 'line',
  });
}

function addBlockLayer(map) {
  map.addSource('block-boundaries', {
    data: '/reach/block-boundaries.geojson',
    type: 'geojson',
  });
  map.addLayer({
    id: 'district-fill',
    paint: {
      'fill-color': '#808080',
      'fill-opacity': 0.5,
    },
    source: 'block-boundaries',
    type: 'fill',
  });
}

function addHealthFacilities(map) {
  map.addSource('health-facilities', {
    data: '/reach/health-facilities.geojson',
    type: 'geojson',
  });
  map.addLayer({
    id: 'health-facilities-fill',
    paint: {
      'fill-color': '#808080',
      'fill-opacity': 0.8,
    },
    source: 'health-facilities',
    type: 'fill',
  });
}

function addLayers(map) {
  addDistrictLayer(map);
  addBlockLayer(map);
  // addHealthFacilities(map);
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
