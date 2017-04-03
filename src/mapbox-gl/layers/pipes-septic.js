import store from '../../store/index.js';
import colors from '../../constants/colors.js';
import wasteWaterFilters from '../../constants/filters/waste-water.js';
import layers from '../../constants/layers.js';
import sources from '../../constants/sources.js';
import keys from '../../constants/keys/pipes-septic.js';

function addLayer({ map }) {
  store.subscribe(() => modifyLayer({ map }));
  map.addLayer(getLayer(), layers.STEEL_TANKS);
  modifyLayer({ map });
}

function getLayer() {
  return {
    id: layers.PIPES_SEPTIC,
    paint: {
      'line-color': colors.DARK_GREY_50,
      'line-width': 1,
    },
    source: sources.PIPES_SEPTIC,
    type: 'line',
  };
}

function modifyLayer({ map }) {
  const state = store.getState();
  if (state.filters.wasteWater[wasteWaterFilters.PIPES_SEPTIC]) {
    map.setFilter(layers.PIPES_SEPTIC, ['has', keys.ID]);
  } else {
    const filters = state.filters.wasteWater;
    const filtersActive = Object.values(filters).includes(true);
    const searchActive = state.search.wasteWater;
    if (filtersActive || searchActive) {
      map.setFilter(layers.PIPES_SEPTIC, ['!has', keys.ID]);
    } else {
      map.setFilter(layers.PIPES_SEPTIC, ['has', keys.ID]);
    }
  }
}

export default addLayer;
