import store from '../../store/index.js';
import colors from '../../constants/colors.js';
import mapbox from '../../constants/mapbox.js';
import layers from '../../constants/layers.js';
import sources from '../../constants/sources.js';
import * as columns from '../../constants/columns/septic.js';
import utils from '../utils/index.js';

function septicTankText({ map }) {
  store.subscribe(() => modifyLayer({ map }));
  map.addLayer(getLayer());
  modifyLayer({ map });
}

function modifyLayer({ map }) {
  utils.modifySepticLayer({ map, layerId: layers.SEPTIC_TANKS_TEXT });
}

function getLayer() {
  return {
    id: layers.SEPTIC_TANKS_TEXT,
    layout: {
      'text-anchor': 'bottom-left',
      'text-field': `{${columns.id.KEY}}`,
      'text-font': ['open-sans-regular'],
      'text-offset': [0.25, -0.25],
    },
    minzoom: mapbox.LABEL_ZOOM_BREAK,
    paint: {
      'text-halo-color': colors.WHITE,
      'text-halo-width': 1.5,
    },
    source: sources.SEPTIC_TANKS,
    type: 'symbol',
  };
}

export default septicTankText;
