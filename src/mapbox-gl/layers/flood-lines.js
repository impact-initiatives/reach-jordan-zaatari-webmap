import colors from '../../constants/colors.js';
import layers from '../../constants/layers.js';
import sources from '../../constants/sources.js';
import keys from '../../constants/keys/flood-lines.js';
import values from '../../constants/values/flood-lines.js';

function addLayer({ map }) {
  map.addLayer(getLayer());
}

function getLayer() {
  return {
    id: layers.FLOOD_LINES,
    layout: {
      'line-cap': 'round',
    },
    paint: {
      'line-color': {
        property: keys.TYPE,
        stops: [
          [values.type.NO_ACCESS, colors.LIGHT_RED_100],
          [values.type.MUD, colors.ORANGE],
          [values.type.FLOOD, colors.MEDIUM_BLUE],
          [values.type.FLOOD_LIGHT, colors.LIGHT_BLUE],
        ],
        type: 'categorical',
      },
      'line-width': 5,
      'line-opacity': 0.9,
    },
    source: sources.FLOOD_LINES,
    type: 'line',
  };
}

export default addLayer;
