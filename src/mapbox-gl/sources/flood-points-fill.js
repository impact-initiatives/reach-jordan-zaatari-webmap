// import store from '../../store/index.js';
import { reach } from '../../constants/resources.js';
import colors from '../../constants/colors.js';
import floodTypes from '../../constants/filters/flood.js';
import { LABEL_ZOOM_BREAK } from '../../constants/mapbox-gl.js';
import utils from '../utils/index.js';
import layer from '../../constants/layers/flood-points-fill.js';

function fetchLayer({ map }) {
  let partnerFeatures;
  let unicefFeatures;
  const pointsPartners = fetch(reach.FLOOD_POINTS)
    .then((response) => response.json())
    .then(({ features }) => {
      partnerFeatures = features.map(addNameToFeature);
    });
  const pointsUnicef = fetch(reach.FLOOD_POINTS_UNICEF)
    .then((response) => response.json())
    .then(({ features }) => {
      unicefFeatures = features;
    });
  Promise.all([pointsPartners, pointsUnicef])
    .then(() => addLayer({ map, partnerFeatures, unicefFeatures }));
}

function addNameToFeature(feature) {
  return {
    ...feature,
    properties: {
      ...feature.properties,
      [layer.PROP_NAME]: feature.properties[layer.PROP_NUMBER] !== null ?
        feature.properties[layer.PROP_NUMBER] : '',
    },
  };
}

function addLayer({ map, partnerFeatures, unicefFeatures }) {
  const mergedFeatures = [...partnerFeatures, ...unicefFeatures];
  utils.addSourceToMap({ features: mergedFeatures, map, sourceId: layer.SOURCE_ID });
  map.addLayer(getLayerFeature());
  map.addLayer(getLayerLabel());
  // modifyLayer({ map });
}

function getLayerFeature() {
  return {
    id: layer.LAYER_ID_FEATURE,
    paint: {
      'circle-color': {
        property: layer.PROP_TYPE,
        stops: [
          [floodTypes.CONTINGENCY_TANK, colors.YELLOW],
          [floodTypes.FACILITY, colors.LIGHT_RED_100],
          [floodTypes.PRC_FULL, colors.LIGHT_BLUE],
          [floodTypes.PRC_OVERFULL, colors.MEDIUM_BLUE],
          [floodTypes.PRIVATE_TANK, colors.ORANGE],
          [floodTypes.ROAD, colors.MEDIUM_BLUE],
          [floodTypes.SHELTER, colors.LIGHT_RED_100],
          [floodTypes.SHELTER_LIGHT, colors.LIGHT_RED_50],
        ],
        type: 'categorical',
      },
      'circle-opacity': 0.9,
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

export default function floodPointsFill({ map }) {
  // store.subscribe(() => modifyLayer({ map }));
  fetchLayer({ map });
}
