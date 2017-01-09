import { reach } from '../../constants/resources.js';
import colors from '../../constants/colors.js';
import utils from '../utils/index.js';
import layer from '../../constants/layers/block-fill.js';

function fetchLayer({ map }) {
  fetch(reach.BLOCK_BOUNDARIES)
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
      'fill-color': colors.DARK_GREY_50,
      'fill-opacity': 0.25,
    },
    source: layer.SOURCE_ID,
    type: 'fill',
  };
}

export default function blockFill({ map }) {
  fetchLayer({ map });
}
