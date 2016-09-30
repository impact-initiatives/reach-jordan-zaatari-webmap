import { REACH } from '../../constants/resources.js';
import { DARK_GREY_50 } from '../../constants/colors.js';

export default function ({ map }) {
  map.addSource('block-boundaries', {
    data: REACH.BLOCK_BOUNDARIES,
    type: 'geojson',
  });
  map.addLayer({
    id: 'district-fill',
    paint: {
      'fill-color': DARK_GREY_50,
      'fill-opacity': 0.25,
    },
    source: 'block-boundaries',
    type: 'fill',
  });
}
