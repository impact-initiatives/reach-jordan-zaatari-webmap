import { REACH } from '../../constants/resources.js';
import COLORS from '../../constants/colors.js';

function addCampFacilities({ map }) {
  if (!map.getSource('camp-facilities')) {
    map.addSource('camp-facilities', {
      data: REACH.CAMP_FACILITIES,
      type: 'geojson',
    });
  }
  map.addLayer({
    id: 'health-facilities-base',
    paint: {
      'fill-color': COLORS.DARK_GREY_30,
      'fill-opacity': 0.9,
    },
    source: 'camp-facilities',
    type: 'fill',
  });
}

export default function ({ map }) {
  addCampFacilities({ map });
}
