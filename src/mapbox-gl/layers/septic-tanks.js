import { REACH } from '../../constants/resources.js';
import { DARK_GREY_50, LIGHT_RED_100, MEDIUM_BLUE } from '../../constants/colors.js';

export default function ({ map }) {
  map.addSource('septic-tanks', {
    data: REACH.SEPTIC_TANKS,
    type: 'geojson',
  });
  map.addLayer({
    id: 'septic-tank-circle',
    paint: {
      'circle-color': {
        property: 'Volume',
        stops: [
          [2, DARK_GREY_50],
          [4, MEDIUM_BLUE],
          [8, LIGHT_RED_100],
        ],
        type: 'categorical',
      },
      'circle-opacity': 0.8,
    },
    source: 'septic-tanks',
    type: 'circle',
  });
}
