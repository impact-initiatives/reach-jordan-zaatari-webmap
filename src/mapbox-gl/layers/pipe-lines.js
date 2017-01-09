import store from '../../store/index.js';
import { reach } from '../../constants/resources.js';
import colors from '../../constants/colors.js';
import wasteWaterFilters from '../../constants/filters/waste-water.js';
import { PIPES_ZOOM_BREAK } from '../../constants/mapbox-gl.js';
import utils from '../utils/index.js';
import layer from '../../constants/layers/pipes-lines.js';

function fetchLayer({ map }) {
  fetch(reach.PIPES)
    .then((response) => response.json())
    .then(({ features }) => addLayer({ features, map }));
}

function addLayer({ features, map }) {
  utils.addSourceToMap({ features, map, sourceId: layer.SOURCE_ID });
  map.addLayer(getLayer());
  modifyLayer({ map });
}

function getLayer() {
  return {
    id: layer.LAYER_ID,
    minzoom: PIPES_ZOOM_BREAK,
    paint: {
      'line-color': colors.DARK_GREY_50,
      'line-width': 1,
    },
    source: layer.SOURCE_ID,
    type: 'line',
  };
}

function modifyLayer({ map }) {
  const state = store.getState();
  if (state.filters.wasteWater[wasteWaterFilters.PIPES]) {
    map.setFilter(layer.LAYER_ID, ['has', layer.PROP_ID]);
  } else {
    const filters = state.filters.wasteWater;
    const filtersActive = Object.values(filters).includes(true);
    const searchActive = state.search.wasteWater;
    if (filtersActive || searchActive) {
      map.setFilter(layer.LAYER_ID, ['!has', layer.PROP_ID]);
    } else {
      map.setFilter(layer.LAYER_ID, ['has', layer.PROP_ID]);
    }
  }
}

export default function ({ map }) {
  store.subscribe(() => modifyLayer({ map }));
  fetchLayer({ map });
}
