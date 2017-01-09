// import store from '../../store/index.js';
import { reach } from '../../constants/resources.js';
import colors from '../../constants/colors.js';
import floodTypes from '../../constants/filters/flood.js';
import utils from '../utils/index.js';
import layer from '../../constants/layers/flood-lines-fill.js';

function fetchLayer({ map }) {
  fetch(reach.FLOOD_LINES)
    .then((response) => response.json())
    .then(({ features }) => addLayer({ features, map }));
}

function addLayer({ features, map }) {
  utils.addSourceToMap({ features, map, sourceId: layer.SOURCE_ID });
  map.addLayer(getLayer());
  // modifyLayer({ map });
}

function getLayer() {
  return {
    id: layer.LAYER_ID,
    layout: {
      'line-cap': 'round',
    },
    paint: {
      'line-color': {
        property: layer.PROP_TYPE,
        stops: [
          [floodTypes.NO_ACCESS, colors.LIGHT_RED_100],
          [floodTypes.MUD, colors.ORANGE],
          [floodTypes.FLOOD, colors.MEDIUM_BLUE],
          [floodTypes.FLOOD_LIGHT, colors.LIGHT_BLUE],
        ],
        type: 'categorical',
      },
      'line-width': 5,
      'line-opacity': 0.9,
    },
    source: layer.SOURCE_ID,
    type: 'line',
  };
}

export default function floodPointsFill({ map }) {
  // store.subscribe(() => modifyLayer({ map }));
  fetchLayer({ map });
}
