import { REACH } from '../../constants/resources.js';
import COLORS from '../../constants/colors.js';

export default function ({ map }) {
  if (!map.getSource('block-boundaries')) {
    map.addSource('block-boundaries', {
      data: REACH.BLOCK_BOUNDARIES,
      type: 'geojson',
    });
  }
  map.addLayer({
    id: 'district-fill',
    paint: {
      'fill-color': COLORS.DARK_GREY_50,
      'fill-opacity': 0.25,
    },
    source: 'block-boundaries',
    type: 'fill',
  });
}
