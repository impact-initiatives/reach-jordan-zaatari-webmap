import reach from '../../constants/reach.js';
import colors from '../../constants/colors.js';
import utils from '../utils/index.js';
import layer from '../../constants/layers/district-operators.js';

function fetchLayer({ map }) {
  fetch(reach.DISTRICT_BOUNDARIES)
    .then((response) => response.json())
    .then(({ features }) => addLayer({ features, map }));
}

function addLayer({ features, map }) {
  utils.addSourceToMap({ features, map, sourceId: layer.SOURCE_ID });
  map.addLayer(getLayer());
}

function getLayer() {
  return {
    id: layer.LAYER_ID,
    paint: {
      'fill-color': {
        property: layer.PROP_NGO,
        stops: [
          [layer.VALUE_ACTED, colors.MEDIUM_BLUE],
          [layer.VALUE_JEN, colors.YELLOW],
          [layer.VALUE_OXFAM, colors.GREEN],
        ],
        type: 'categorical',
      },
      'fill-opacity': 0.8,
      'fill-outline-color': colors.WHITE,
    },
    source: layer.SOURCE_ID,
    type: 'fill',
  };
}

export default function districtOperators({ map }) {
  fetchLayer({ map });
}
