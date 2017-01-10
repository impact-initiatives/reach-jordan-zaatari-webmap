import store from '../../store/index.js';
import { reach } from '../../constants/resources.js';
import colors from '../../constants/colors.js';
import wasteWaterFilters from '../../constants/filters/waste-water.js';
import utils from '../utils/index.js';
import layer from '../../constants/layers/steel-tank-fill.js';
import { LABEL_ZOOM_BREAK } from '../../constants/mapbox-gl.js';

function fetchLayer({ map }) {
  fetch(reach.steelTanks)
    .then((response) => response.json())
    .then(({ features }) => addLayer({ features, map }));
}

function addLayer({ features, map }) {
  const mappedFeatures = features.map(convertNullToString);
  utils.addSourceToMap({ features: mappedFeatures, map, sourceId: layer.SOURCE_ID });
  map.addLayer(getLayerFeature());
  map.addLayer(getLayerLabel());
  modifyLayer({ map });
}

function convertNullToString(feature) {
  return {
    ...feature,
    properties: {
      ...feature.properties,
      [layer.PROP_NAME]: feature.properties[layer.PROP_NAME] || '',
    },
  };
}

function getLayerFeature() {
  return {
    id: layer.LAYER_ID_FEATURE,
    paint: {
      'circle-color': colors.DARK_GREY_100,
      'circle-radius': 6.5,
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

function modifyLayer({ map }) {
  const state = store.getState();
  if (state.filters.wasteWater[wasteWaterFilters.steelTanks]) {
    map.setFilter(layer.LAYER_ID_FEATURE, ['has', layer.PROP_ID]);
  } else {
    const filters = state.filters.wasteWater;
    const filtersActive = Object.values(filters).includes(true);
    const searchActive = state.search.wasteWater;
    if (filtersActive || searchActive) {
      map.setFilter(layer.LAYER_ID_FEATURE, ['!has', layer.PROP_ID]);
    } else {
      map.setFilter(layer.LAYER_ID_FEATURE, ['has', layer.PROP_ID]);
    }
  }
}

export default function steelTankFill({ map }) {
  store.subscribe(() => modifyLayer({ map }));
  fetchLayer({ map });
}
