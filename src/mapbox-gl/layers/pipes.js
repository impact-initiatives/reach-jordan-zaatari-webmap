import store from '../../store/index.js';
import colors from '../../constants/colors.js';
import wasteWaterFilters from '../../constants/filters/waste-water.js';
import mapbox from '../../constants/mapbox.js';
import layers from '../../constants/layers.js';
import sources from '../../constants/sources.js';
import keys from '../../constants/keys/pipes.js';

function addLayer({ map }) {
  store.subscribe(() => modifyLayer({ map }));
  map.addLayer(getLayer());
  modifyLayer({ map });
}

function getLayer() {
  return {
    id: layers.PIPES,
    minzoom: mapbox.PIPES_ZOOM_BREAK,
    paint: {
      'line-color': colors.DARK_GREY_50,
      'line-width': 1,
    },
    source: sources.PIPES,
    type: 'line',
  };
}

function modifyLayer({ map }) {
  const state = store.getState();
  if (state.filters.wasteWater[wasteWaterFilters.PIPES]) {
    map.setFilter(layers.PIPES, ['has', keys.ID]);
  } else {
    const filters = state.filters.wasteWater;
    const filtersActive = Object.values(filters).includes(true);
    const searchActive = state.search.wasteWater;
    if (filtersActive || searchActive) {
      map.setFilter(layers.PIPES, ['!has', keys.ID]);
    } else {
      map.setFilter(layers.PIPES, ['has', keys.ID]);
    }
  }
}

export default addLayer;
