import colors from '../../constants/colors.js';
import mapbox from '../../constants/mapbox.js';
import layers from '../../constants/layers.js';
import sources from '../../constants/sources.js';
import keys from '../../constants/keys/flood-points.js';
import values from '../../constants/values/flood-points.js';

function addLayer({ map }) {
  map.addLayer(getLayer());
  map.addLayer(getLayerText());
}

function getLayer() {
  return {
    id: layers.FLOOD_POINTS,
    paint: {
      'circle-color': {
        property: keys.TYPE,
        stops: [
          [values.type.CONTINGENCY_TANK, colors.YELLOW],
          [values.type.FACILITY, colors.LIGHT_RED_100],
          [values.type.PRC_FULL, colors.LIGHT_BLUE],
          [values.type.PRC_OVERFULL, colors.MEDIUM_BLUE],
          [values.type.PRIVATE_TANK, colors.ORANGE],
          [values.type.SHELTER, colors.LIGHT_RED_100],
          [values.type.SHELTER_LIGHT, colors.LIGHT_RED_50],
        ],
        type: 'categorical',
      },
      'circle-opacity': 0.9,
    },
    source: sources.FLOOD_POINTS,
    type: 'circle',
  };
}

function getLayerText() {
  return {
    id: layers.FLOOD_POINTS_TEXT,
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
    source: sources.FLOOD_POINTS,
    type: 'symbol',
  };
}

export default addLayer;
