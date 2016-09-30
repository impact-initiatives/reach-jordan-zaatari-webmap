import { REACH } from '../../constants/resources.js';
import { WHITE } from '../../constants/colors.js';

export default function ({ map }) {
  if (!map.getSource('district-boundaries')) {
    map.addSource('district-boundaries', {
      data: REACH.DISTRICT_BOUNDARIES,
      type: 'geojson',
    });
  }
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
