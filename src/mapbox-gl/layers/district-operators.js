import { REACH } from '../../constants/resources.js';
import COLORS from '../../constants/colors.js';

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
          ['ACTED', COLORS.MEDIUM_BLUE],
          ['JEN', COLORS.YELLOW],
          ['Oxfam', COLORS.GREEN],
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
      'line-color': COLORS.WHITE,
      'line-width': 3,
    },
    source: 'district-boundaries',
    type: 'line',
  });
}

export default function ({ map }) {
  addDistrictBoundaries({ map });
}
