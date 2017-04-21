import * as colors from '../../constants/colors.js';
import store from '../../store/index.js';
import { AR } from '../../constants/languages.js';
import mapbox from '../../constants/mapbox.js';
import layers from '../../constants/layers.js';
import sources from '../../constants/sources.js';
import keys from '../../constants/keys/camp-facilities.js';

function addLayer({ map }) {
  map.addLayer(getLayerOptions());
}

function getLayerOptions() {
  const language = store.getState().lang === AR ? keys.NAME_AR : keys.NAME_EN;
  return {
    id: layers.CAMP_FACILITIES_TEXT,
    layout: {
      'text-field': `{${keys[language]}}`,
      'text-font': ['open-sans-regular'],
    },
    minzoom: mapbox.LABEL_ZOOM_BREAK,
    paint: {
      'text-halo-color': colors.WHITE,
      'text-halo-width': 1.5,
    },
    source: sources.CAMP_FACILITIES_POINT,
    type: 'symbol',
  };
}

export default addLayer;
