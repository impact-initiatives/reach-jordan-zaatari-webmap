import { REACH } from '../constants/resources.js';

export function addDistrictBoundaries(map) {
  map.addSource('district-boundaries', {
    data: REACH.DISTRICT_BOUNDARIES,
    type: 'geojson',
  });
  map.addLayer({
    id: 'district-line',
    paint: {
      'line-color': '#ffffff',
      'line-opacity': 1,
      'line-width': 3,
    },
    source: 'district-boundaries',
    type: 'line',
  });
}

export function addBlockBoundaries(map) {
  map.addSource('block-boundaries', {
    data: REACH.BLOCK_BOUNDARIES,
    type: 'geojson',
  });
  map.addLayer({
    id: 'district-fill',
    paint: {
      'fill-color': '#808080',
      'fill-opacity': 0.25,
    },
    source: 'block-boundaries',
    type: 'fill',
  });
}

export function addCampFacilities(map) {
  map.addSource('health-facilities', {
    data: REACH.CAMP_FACILITIES,
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
