import { REACH } from '../../constants/resources.js';
import { LIGHT_RED_100, MEDIUM_BLUE, DARK_GREY_50 } from '../../constants/colors.js';

export function addDistrictBoundaries(map) {
  map.addSource('district-boundaries', {
    data: REACH.DISTRICT_BOUNDARIES,
    type: 'geojson',
  });
  map.addLayer({
    id: 'district-line',
    paint: {
      'line-color': '#ffffff',
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
      'fill-color': {
        property: 'Health_Typ',
        stops: [
          ['Healthcare Facility', LIGHT_RED_100],
          ['Camp Facility with Health Services', MEDIUM_BLUE],
          ['Camp Facility', DARK_GREY_50],
        ],
        type: 'categorical',
      },
      'fill-opacity': 0.8,
    },
    source: 'health-facilities',
    type: 'fill',
  });
  map.addLayer({
    id: 'health-facilities-outline',
    paint: {
      'line-color': '#ffffff',
      'line-width': 1,
    },
    source: 'health-facilities',
    type: 'line',
  });
}
