import * as colors from '../../constants/colors.js';
import store from '../../store/index.js';
import { AR } from '../../constants/languages.js';
import mapbox from '../../constants/mapbox.js';
import layers from '../../constants/layers.js';
import sources from '../../constants/sources.js';
import * as columns from '../../constants/columns/roads.js';

function addLayer({ map }) {
  map.addLayer(getLayer());
}

function getLayer() {
  const language = store.getState().lang === AR ? columns.nameAr.KEY : columns.nameEn.KEY;
  return {
    id: layers.ROADS_TEXT,
    layout: {
      'symbol-placement': 'line',
      'symbol-spacing': 500,
      'text-field': `{${language}}`,
      'text-font': ['open-sans-regular'],
    },
    minzoom: mapbox.LABEL_ZOOM_BREAK,
    paint: {
      'text-halo-color': colors.WHITE,
      'text-halo-width': 1.5,
      'text-color': colors.LIGHT_RED_100,
    },
    source: sources.ROADS,
    type: 'symbol',
  };
}

export default addLayer;
