import store from '../../store/index.js';
import colors from '../../constants/colors.js';
import mapbox from '../../constants/mapbox.js';
import layers from '../../constants/layers.js';
import sources from '../../constants/sources.js';
import keys from '../../constants/keys/septic-tanks.js';
import values from '../../constants/values/septic-tanks.js';

const { mapboxgl } = window;

function septicTankSize({ map }) {
  store.subscribe(() => modifyLayer({ map }));
  map.addLayer(getLayerFeature());
  map.addLayer(getLayerLabel());
  addPopup({ map });
  modifyLayer({ map });
}

function getLayerFeature() {
  return {
    id: layers.SEPTIC_TANKS,
    paint: {
      'circle-color': {
        property: keys.VOLUME,
        stops: [
          [values.volume.TWO, colors.LIGHT_RED_100],
          [values.volume.FOUR, colors.GREEN],
          [values.volume.EIGHT, colors.MEDIUM_BLUE],
        ],
        type: 'categorical',
      },
      'circle-opacity': 0.8,
    },
    source: sources.SEPTIC_TANKS,
    type: 'circle',
  };
}

function getLayerLabel() {
  return {
    id: layers.SEPTIC_TANKS_TEXT,
    layout: {
      'text-anchor': 'bottom-left',
      'text-field': `{${keys.NAME}}`,
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

function addPopup({ map }) {
  map.on('click', ({ point }) => onClick({ point, map }));
  map.on('mousemove', ({ point }) => onMouseMove({ point, map }));
}

function onClick({ point, map }) {
  const features = map.queryRenderedFeatures(point, { layers: [layers.SEPTIC_TANKS] });
  if (features.length && features[0].properties[keys.VOLUME] !== 'null') {
    const feature = features[0];
    const header = '<div><b>Connected Households</b></div>';
    const households = feature.properties[keys.HOUSES]
      .split(',')
      .filter((house) => house)
      .map((house) => `<div>${house}</div>`);
    const popupText = [header, ...households].join('');
    new mapboxgl.Popup({ closeButton: false })
      .setLngLat(map.unproject(point))
      .setHTML(popupText)
      .addTo(map);
  }
}

function onMouseMove({ point, map }) {
  const features = map.queryRenderedFeatures(point, { layers: [layers.SEPTIC_TANKS] });
  const canvas = map.getCanvas();
  canvas.style.cursor = (
    features.length && features[0].properties[keys.VOLUME] !== 'null') ? 'pointer' : '';
}

function modifyLayer({ map }) {
  const state = store.getState();
  if (state.search.wasteWater) {
    filterBySearch({ map, state });
  } else {
    filterByType({ map, state });
  }
}

function filterBySearch({ map, state }) {
  const filter = [];
  const search = state.search.wasteWater;
  for (let i = 0; i < mapbox.NUM_HOUSES; i += 1) {
    filter.push(['==', String(i), search]);
  }
  map.setFilter(layers.SEPTIC_TANKS, ['any', ...filter]);
  map.setFilter(layers.SEPTIC_TANKS_TEXT, ['any', ...filter]);
}

function filterByType({ map, state }) {
  const storeFilter = state.filters.wasteWater;
  const mapFilter = Object.entries(storeFilter)
    .filter(([, value]) => value)
    .map(([key]) => {
      if (key.includes('8')) return ['==', keys.VOLUME, 8];
      else if (key.includes('4')) return ['==', keys.VOLUME, 4];
      else if (key.includes('2')) return ['==', keys.VOLUME, 2];
      return ['!has', keys.VOLUME];
    });
  if (!mapFilter.length) mapFilter.push(['has', keys.VOLUME]);
  map.setFilter(layers.SEPTIC_TANKS, ['any', ...mapFilter]);
  map.setFilter(layers.SEPTIC_TANKS_TEXT, ['any', ...mapFilter]);
}

export default septicTankSize;
