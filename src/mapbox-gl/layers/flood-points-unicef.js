import colors from '../../constants/colors.js';
import layers from '../../constants/layers.js';
import sources from '../../constants/sources.js';
import mapbox from '../../constants/mapbox.js';
import keys from '../../constants/keys/flood-points-unicef.js';
import values from '../../constants/values/flood-points-unicef.js';

function addLayer({ map }) {
  map.addLayer(getLayer());
  map.addLayer(getLayerText());
}

function getLayer() {
  return {
    id: layers.FLOOD_POINTS_UNICEF,
    paint: {
      'circle-color': {
        property: keys.SEVERITY,
        stops: [
          [values.severity.ONE, colors.DARK_GREY_50],
          [values.severity.TWO, colors.GREEN],
          [values.severity.THREE, colors.YELLOW],
          [values.severity.FOUR, colors.ORANGE],
          [values.severity.FIVE, colors.LIGHT_RED_100],
        ],
        type: 'categorical',
      },
      'circle-opacity': 0.9,
    },
    source: sources.FLOOD_POINTS_UNICEF,
    type: 'circle',
  };
}

function getLayerText() {
  return {
    id: layers.FLOOD_POINTS_UNICEF_TEXT,
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
    source: sources.FLOOD_POINTS_UNICEF,
    type: 'symbol',
  };
}

export default addLayer;
