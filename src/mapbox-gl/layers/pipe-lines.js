import store from '../../store/index.js';
import { REACH } from '../../constants/resources.js';
import COLORS from '../../constants/colors.js';
import FILTERS from '../../constants/filters/waste-water.js';

const SOURCE_ID = 'pipes';
const LAYER_ID = 'pipes-line';
const FILTER_PROP = 'Entity';

function modifyLayer({ map }) {
  if (store.getState().filters.wasteWater[FILTERS.PIPES]) {
    map.setFilter(LAYER_ID, ['has', FILTER_PROP]);
  } else {
    const filters = store.getState().filters.wasteWater;
    const filtersActive = Object.values(filters).includes(true);
    if (filtersActive) {
      map.setFilter(LAYER_ID, ['!has', FILTER_PROP]);
    } else {
      map.setFilter(LAYER_ID, ['has', FILTER_PROP]);
    }
  }
}

function addLayer({ map }) {
  if (!map.getSource(SOURCE_ID)) {
    map.addSource(SOURCE_ID, {
      data: REACH.PIPES,
      type: 'geojson',
    });
  }
  map.addLayer({
    id: LAYER_ID,
    paint: {
      'line-color': COLORS.DARK_GREY_50,
      'line-width': 1,
    },
    source: SOURCE_ID,
    type: 'line',
  });
  modifyLayer({ map });
}

export default function ({ map }) {
  store.subscribe(() => modifyLayer({ map }));
  addLayer({ map });
}
