import * as colors from '../../constants/colors.js';
import store from '../../store/index.js';
import { AR } from '../../constants/languages.js';
import mapbox from '../../constants/mapbox.js';
import layers from '../../constants/layers.js';
import sources from '../../constants/sources.js';
import keys from '../../constants/keys/block-boundaries.js';

function addLayer({ map, minzoom }) {
  map.addLayer(getLayer({ minzoom }));
}

function getLayer({ minzoom }) {
  const language = store.getState().lang === AR ? keys.NAME_AR : keys.NAME_EN;
  return {
    id: layers.BLOCK_BOUNDARIES_TEXT,
    layout: {
      'text-field': `{${keys[language]}}`,
      'text-font': ['open-sans-regular'],
    },
    minzoom: minzoom ? mapbox.LABEL_ZOOM_BREAK : mapbox.MIN_ZOOM,
    paint: {
      'text-halo-color': colors.WHITE,
      'text-halo-width': 1.5,
      'text-color': colors.MEDIUM_BLUE,
    },
    source: sources.BLOCK_BOUNDARIES_POINT,
    type: 'symbol',
  };
}

export default addLayer;
