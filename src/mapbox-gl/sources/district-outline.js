import reach from '../../constants/reach.js';
import colors from '../../constants/colors.js';
import utils from '../utils/index.js';
import layer from '../../constants/layers/district-outline.js';

function fetchLayer({ map }) {
  fetch(reach.DISTRICT_BOUNDARIES)
    .then((response) => response.json())
    .then(({ features }) => addLayer({ features, map }));
}

function addLayer({ features, map }) {
  utils.addSourceToMap({ features, map, sourceId: layer.SOURCE_ID });
  map.addLayer(getLayerOptions());
}

function getLayerOptions() {
  return {
    id: layer.LAYER_ID,
    paint: {
      'line-color': colors.WHITE,
      'line-width': 3,
    },
    source: layer.SOURCE_ID,
    type: 'line',
  };
}

export default function blockFill({ map }) {
  fetchLayer({ map });
}
