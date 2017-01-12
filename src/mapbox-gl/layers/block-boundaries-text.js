import colors from '../../constants/colors.js';
import layers from '../../constants/layers.js';
import sources from '../../constants/sources.js';
import keys from '../../constants/keys/block-boundaries.js';

function addLayer({ map }) {
  map.addLayer(getLayer());
}

function getLayer() {
  return {
    id: layers.BLOCK_BOUNDARIES_TEXT,
    layout: {
      'text-field': `{${keys.NAME_EN}}`,
      'text-font': ['open-sans-regular'],
    },
    paint: {
      'text-halo-color': colors.WHITE,
      'text-halo-width': 1.5,
    },
    source: sources.BLOCK_BOUNDARIES_POINT,
    type: 'symbol',
  };
}

export default addLayer;
