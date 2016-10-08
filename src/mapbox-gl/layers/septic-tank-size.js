import store from '../../store/index.js';
import { REACH } from '../../constants/resources.js';
import COLORS from '../../constants/colors.js';
import FILTERS from '../../constants/filters/waste-water.js';

const SOURCE_ID = 'septic-tanks';
const LAYER_ID_FEATURE = 'septic-tanks-feature';
const LAYER_ID_LABEL = 'septic-tanks-label';
const FILTER_PROP = 'Volume';

function modifyLayer({ map }) {
  if (store.getState().filters.wasteWater[FILTERS.SEPTIC_TANKS]) {
    map.setFilter(LAYER_ID_FEATURE, ['has', FILTER_PROP]);
    map.setFilter(LAYER_ID_LABEL, ['has', FILTER_PROP]);
  } else {
    const filters = store.getState().filters.wasteWater;
    const filtersActive = Object.values(filters).includes(true);
    if (filtersActive) {
      map.setFilter(LAYER_ID_FEATURE, ['!has', FILTER_PROP]);
      map.setFilter(LAYER_ID_LABEL, ['!has', FILTER_PROP]);
    } else {
      map.setFilter(LAYER_ID_FEATURE, ['has', FILTER_PROP]);
      map.setFilter(LAYER_ID_LABEL, ['has', FILTER_PROP]);
    }
  }
}

function addLayer({ map }) {
  if (!map.getSource(SOURCE_ID)) {
    map.addSource(SOURCE_ID, {
      data: REACH.SEPTIC_TANKS,
      type: 'geojson',
    });
  }
  map.addLayer({
    id: LAYER_ID_FEATURE,
    paint: {
      'circle-color': {
        property: 'Volume',
        stops: [
          [2, COLORS.LIGHT_RED_100],
          [4, COLORS.GREEN],
          [8, COLORS.MEDIUM_BLUE],
        ],
        type: 'categorical',
      },
      'circle-opacity': 0.8,
    },
    source: SOURCE_ID,
    type: 'circle',
  });
  map.addLayer({
    id: LAYER_ID_LABEL,
    layout: {
      'text-anchor': 'bottom-left',
      'text-field': '{Name}',
      'text-font': ['open-sans-regular'],
      'text-offset': [0.25, -0.25],
    },
    minzoom: 16,
    paint: {
      'text-halo-color': COLORS.WHITE,
      'text-halo-width': 1.5,
    },
    source: SOURCE_ID,
    type: 'symbol',
  });
  modifyLayer({ map });
}

export default function ({ map }) {
  store.subscribe(() => modifyLayer({ map }));
  addLayer({ map });
}
