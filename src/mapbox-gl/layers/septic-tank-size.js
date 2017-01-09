import store from '../../store/index.js';
import { reach } from '../../constants/resources.js';
import colors from '../../constants/colors.js';
import { LABEL_ZOOM_BREAK } from '../../constants/mapbox-gl.js';
import utils from '../utils/index.js';
import layer from '../../constants/layers/septic-tank-size.js';

const { mapboxgl } = window;

function fetchLayer({ map }) {
  fetch(reach.SEPTIC_TANKS)
    .then((response) => response.json())
    .then(({ features }) => addLayer({ features, map }));
}

function addLayer({ features, map }) {
  const featuresMapped = features.map(modifyFeatures);
  utils.addSourceToMap({ features: featuresMapped, map, sourceId: layer.SOURCE_ID });
  map.addLayer(getLayerFeature());
  map.addLayer(getLayerLabel());
  addPopup({ map });
  modifyLayer({ map });
}

function modifyFeatures(feature) {
  const houses = (feature.properties[layer.PROP_HOUSE] || '').split(',');
  return {
    ...feature,
    properties: {
      ...feature.properties,
      ...houses,
    },
  };
}

function getLayerFeature() {
  return {
    id: layer.LAYER_ID_FEATURE,
    paint: {
      'circle-color': {
        property: layer.PROP_VOLUME,
        stops: [
          [2, colors.LIGHT_RED_100],
          [4, colors.GREEN],
          [8, colors.MEDIUM_BLUE],
        ],
        type: 'categorical',
      },
      'circle-opacity': 0.8,
    },
    source: layer.SOURCE_ID,
    type: 'circle',
  };
}

function getLayerLabel() {
  return {
    id: layer.LAYER_ID_LABEL,
    layout: {
      'text-anchor': 'bottom-left',
      'text-field': `{${layer.PROP_NAME}}`,
      'text-font': ['open-sans-regular'],
      'text-offset': [0.25, -0.25],
    },
    minzoom: LABEL_ZOOM_BREAK,
    paint: {
      'text-halo-color': colors.WHITE,
      'text-halo-width': 1.5,
    },
    source: layer.SOURCE_ID,
    type: 'symbol',
  };
}

function addPopup({ map }) {
  map.on('click', ({ point }) => onClick({ point, map }));
  map.on('mousemove', ({ point }) => onMouseMove({ point, map }));
}

function onClick({ point, map }) {
  const features = map.queryRenderedFeatures(point, { layers: [layer.LAYER_ID_FEATURE] });
  if (features.length && features[0].properties[layer.PROP_VOLUME] !== 'null') {
    const feature = features[0];
    const header = '<div><b>Connected Households</b></div>';
    const households = feature.properties[layer.PROP_HOUSE]
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
  const features = map.queryRenderedFeatures(point, { layers: [layer.LAYER_ID_FEATURE] });
  const canvas = map.getCanvas();
  canvas.style.cursor = (
    features.length && features[0].properties[layer.PROP_VOLUME] !== 'null') ? 'pointer' : '';
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
  for (let i = 0; i < layer.NUM_HOUSES; i += 1) {
    filter.push(['==', String(i), search]);
  }
  map.setFilter(layer.LAYER_ID_FEATURE, ['any', ...filter]);
  map.setFilter(layer.LAYER_ID_LABEL, ['any', ...filter]);
}

function filterByType({ map, state }) {
  const storeFilter = state.filters.wasteWater;
  const mapFilter = Object.entries(storeFilter)
    .filter(([, value]) => value)
    .map(([key]) => {
      if (key.includes('8')) return ['==', layer.PROP_VOLUME, 8];
      else if (key.includes('4')) return ['==', layer.PROP_VOLUME, 4];
      else if (key.includes('2')) return ['==', layer.PROP_VOLUME, 2];
      return ['!has', layer.PROP_VOLUME];
    });
  if (!mapFilter.length) mapFilter.push(['has', layer.PROP_VOLUME]);
  map.setFilter(layer.LAYER_ID_FEATURE, ['any', ...mapFilter]);
  map.setFilter(layer.LAYER_ID_LABEL, ['any', ...mapFilter]);
}

export default function septicTankSize({ map }) {
  store.subscribe(() => modifyLayer({ map }));
  fetchLayer({ map });
}
