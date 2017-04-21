import store from '../../store/index.js';
import * as colors from '../../constants/colors.js';
import mapbox from '../../constants/mapbox.js';
import layers from '../../constants/layers.js';
import sources from '../../constants/sources.js';
import * as columns from '../../constants/columns/steel.js';
import utils from '../utils/index.js';

function steelTanks({ map }) {
  store.subscribe(() => modifyLayer({ map }));
  map.addLayer(getLayer());
  modifyLayer({ map });
}

function getLayer() {
  return {
    id: layers.STEEL_TANKS_TEXT,
    layout: {
      'text-anchor': 'bottom-left',
      'text-field': `{${columns.id.KEY}}`,
      'text-font': ['open-sans-regular'],
      'text-offset': [0.25, -0.25],
      'text-size': 18,
    },
    minzoom: mapbox.LABEL_ZOOM_BREAK,
    paint: {
      'text-halo-color': colors.WHITE,
      'text-halo-width': 1.5,
    },
    source: sources.STEEL_TANKS,
    type: 'symbol',
  };
}

function modifyLayer({ map }) {
  utils.modifySteelLayer({ map, layerId: layers.STEEL_TANKS_TEXT });
}

export default steelTanks;
