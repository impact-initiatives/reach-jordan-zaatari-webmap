import colors from '../../constants/colors.js';
import layers from '../../constants/layers.js';
import sources from '../../constants/sources.js';
import keys from '../../constants/keys/district-boundaries.js';
import values from '../../constants/values/district-boundaries.js';

function addLayer({ map }) {
  map.addLayer(getLayer());
}

function getLayer() {
  return {
    id: layers.DISTRICT_BOUNDARIES,
    paint: {
      'fill-color': {
        property: keys.NGO_OPERATORS,
        stops: [
          [values.ngoOperators.ACTED, colors.MEDIUM_BLUE],
          [values.ngoOperators.JEN, colors.YELLOW],
          [values.ngoOperators.OXFAM, colors.GREEN],
        ],
        type: 'categorical',
      },
      'fill-opacity': 0.8,
      'fill-outline-color': colors.WHITE,
    },
    source: sources.DISTRICT_BOUNDARIES,
    type: 'fill',
  };
}

export default addLayer;
