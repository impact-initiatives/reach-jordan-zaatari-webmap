// import store from '../../store/index.js';
import reach from '../../constants/reach.js';
import colors from '../../constants/colors.js';
import mapbox from '../../constants/mapbox.js';
import utils from '../utils/index.js';
import layer from '../../constants/layers/flood-points-unicef-fill.js';

function fetchLayer({ map }) {
  fetch(reach.FLOOD_POINTS_UNICEF)
    .then((response) => response.json())
    .then(({ features }) => addLayer({ features, map }));
}

function addLayer({ features, map }) {
  utils.addSourceToMap({ features, map, sourceId: layer.SOURCE_ID });
  map.addLayer(getLayerFeature());
  map.addLayer(getLayerLabel());
  // modifyLayer({ map });
}

function getLayerFeature() {
  return {
    id: layer.LAYER_ID_FEATURE,
    paint: {
      'circle-color': {
        property: layer.PROP_SEVERITY,
        stops: [
          [1, colors.DARK_GREY_50],
          [2, colors.GREEN],
          [3, colors.YELLOW],
          [4, colors.ORANGE],
          [5, colors.LIGHT_RED_100],
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
      'text-field': '{NAME}',
      'text-font': ['open-sans-regular'],
      'text-offset': [0.25, -0.25],
    },
    minzoom: mapbox.LABEL_ZOOM_BREAK,
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
