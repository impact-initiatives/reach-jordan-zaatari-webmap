import { REACH } from '../../constants/resources.js';
import { MEDIUM_BLUE, LIGHT_RED_100, GREEN, WHITE } from '../../constants/colors.js';

function addDistrictBoundaries({ map }) {
  if (!map.getSource('district-boundaries')) {
    map.addSource('district-boundaries', {
      data: REACH.DISTRICT_BOUNDARIES,
      type: 'geojson',
    });
  }
  map.addLayer({
    id: 'district-boundaries-fill',
    paint: {
      'fill-color': {
        property: 'NGO_Operat',
        stops: [
          ['ACTED', MEDIUM_BLUE],
          ['JEN', LIGHT_RED_100],
          ['Oxfam', GREEN],
        ],
        type: 'categorical',
      },
      'fill-opacity': 0.8,
    },
    source: 'district-boundaries',
    type: 'fill',
  });
  map.addLayer({
    id: 'district-line',
    paint: {
      'line-color': WHITE,
      'line-width': 3,
    },
    source: 'district-boundaries',
    type: 'line',
  });
}

export default function ({ map }) {
  addDistrictBoundaries({ map });
}
