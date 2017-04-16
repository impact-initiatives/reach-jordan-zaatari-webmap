import store from '../../store/index.js';
import colors from '../../constants/colors.js';
import mapbox from '../../constants/mapbox.js';
import layers from '../../constants/layers.js';
import sources from '../../constants/sources.js';
import * as columns from '../../constants/columns/household.js';
import utils from '../utils/index.js';

function householdsText({ map }) {
  store.subscribe(() => modifyLayer({ map }));
  map.addLayer(getLayer());
  modifyLayer({ map });
}

function modifyLayer({ map }) {
  utils.modifyHouseholdsLayer({ map, layerId: layers.HOUSEHOLDS_TEXT });
}

function getLayer() {
  return {
    id: layers.HOUSEHOLDS_TEXT,
    layout: {
      'text-anchor': 'bottom-left',
      'text-field': `{${columns.id.KEY}}`,
      'text-font': ['open-sans-regular'],
      'text-size': 14,
      'text-offset': [0.25, -0.25],
    },
    minzoom: mapbox.HOUSEHOLD_TEXT_ZOOM_BREAK,
    paint: {
      'text-halo-color': colors.WHITE,
      'text-halo-width': 1.5,
    },
    source: sources.HOUSEHOLDS,
    type: 'symbol',
  };
}

export default householdsText;
