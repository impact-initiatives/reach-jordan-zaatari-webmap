import store from '../../store/index.js';
import { REACH } from '../../constants/resources.js';
import COLORS from '../../constants/colors.js';
import { LABEL_ZOOM_BREAK, NUM_HOUSEHOLDS } from '../../constants/mapbox-gl.js';

const { mapboxgl } = window;

const SOURCE_ID = 'septic-tanks';
const LAYER_ID_FEATURE = 'septic-tanks-feature';
const LAYER_ID_LABEL = 'septic-tanks-label';
const FILTER_PROP = 'Volume';

function addPopup({ map }) {
  map.on('click', (e) => {
    const features = map.queryRenderedFeatures(e.point, {
      layers: [LAYER_ID_FEATURE],
    });
    if (features.length && features[0].properties[FILTER_PROP] !== 'null') {
      const feature = features[0];
      const popupText = ['<div><b>Connected Households</b></div>'];
      for (let i = 0; i < NUM_HOUSEHOLDS; i += 1) {
        const prop = `HH${i + 1}`;
        const household = feature.properties[prop];
        if (household !== 'null') {
          popupText.push(`<div>${household}</div>`);
        } else {
          break;
        }
      }
      new mapboxgl.Popup({ closeButton: false })
        .setLngLat(map.unproject(e.point))
        .setHTML(popupText.join(''))
        .addTo(map);
    }
  });
  map.on('mousemove', (e) => {
    const features = map.queryRenderedFeatures(e.point, {
      layers: [LAYER_ID_FEATURE],
    });
    const canvas = map.getCanvas();
    canvas.style.cursor = (
      features.length && features[0].properties[FILTER_PROP] !== 'null') ? 'pointer' : '';
  });
}

function filterByType({ map, state }) {
  const filter = [];
  const filters = state.filters.wasteWater;
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

function filterBySearch({ map, state }) {
  const filter = [];
  const search = state.search.wasteWater;
  for (let i = 0; i < NUM_HOUSEHOLDS; i += 1) {
    filter.push(['==', `HH${i + 1}`, search]);
  }
  map.setFilter(LAYER_ID_FEATURE, ['any', ...filter]);
  map.setFilter(LAYER_ID_LABEL, ['any', ...filter]);
}

function modifyLayer({ map }) {
  const state = store.getState();
  if (state.search.wasteWater) {
    filterBySearch({ map, state });
  } else {
    filterByType({ map, state });
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
      'text-field': '{New_Name}',
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
  addPopup({ map });
}
