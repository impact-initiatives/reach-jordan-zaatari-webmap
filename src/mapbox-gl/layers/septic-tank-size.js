import store from '../../store/index.js';
import { REACH } from '../../constants/resources.js';
import COLORS from '../../constants/colors.js';
import { LABEL_ZOOM_BREAK } from '../../constants/mapbox-gl.js';

const SOURCE_ID = 'septic-tanks';
const LAYER_ID_FEATURE = 'septic-tanks-feature';
const LAYER_ID_LABEL = 'septic-tanks-label';
const FILTER_PROP = 'Volume';

function modifyLayer({ map }) {
  const filter = [];
  const filters = store.getState().filters.wasteWater;
  for (const [key, value] of Object.entries(filters)) {
    if (key.includes('8') && value) filter.push(['==', FILTER_PROP, 8]);
    else if (key.includes('4') && value) filter.push(['==', FILTER_PROP, 4]);
    else if (key.includes('2') && value) filter.push(['==', FILTER_PROP, 2]);
    else if (value) filter.push(['!has', FILTER_PROP]);
  }
  if (!filter.length) filter.push(['has', FILTER_PROP]);
  map.setFilter(LAYER_ID_FEATURE, ['any', ...filter]);
  map.setFilter(LAYER_ID_LABEL, ['any', ...filter]);
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
    minzoom: LABEL_ZOOM_BREAK,
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
