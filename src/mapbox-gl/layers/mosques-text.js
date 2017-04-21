import * as colors from '../../constants/colors.js';
import store from '../../store/index.js';
import { AR } from '../../constants/languages.js';
import mapbox from '../../constants/mapbox.js';
import layers from '../../constants/layers.js';
import sources from '../../constants/sources.js';
import * as columns from '../../constants/columns/mosques.js';

function addLayer({ map, minzoom }) {
  map.addLayer(getLayer({ minzoom }));
}

function getLayer() {
  const language = store.getState().lang === AR ? columns.nameAr.KEY : columns.nameEn.KEY;
  return {
    id: layers.MOSQUES_TEXT,
    layout: {
      'text-field': `{${language}}`,
      'text-font': ['open-sans-regular'],
      'text-anchor': 'top',
      'text-offset': [0, 0.5],
    },
    minzoom: mapbox.MOSQUE_ZOOM_BREAK,
    paint: {
      'text-halo-color': colors.WHITE,
      'text-halo-width': 1.5,
    },
    source: sources.MOSQUES,
    type: 'symbol',
  };
}

export default addLayer;
