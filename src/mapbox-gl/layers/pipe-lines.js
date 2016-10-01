import { REACH } from '../../constants/resources.js';
import { DARK_GREY_50 } from '../../constants/colors.js';

export default function ({ map }) {
  map.addSource('pipes', {
    data: REACH.PIPES,
    type: 'geojson',
  });
  map.addLayer({
    id: 'pipe-line',
    paint: {
      'line-color': DARK_GREY_50,
      'line-width': 1,
    },
    source: 'pipes',
    type: 'line',
  });
}
