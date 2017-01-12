import colors from '../../constants/colors.js';
import layers from '../../constants/layers.js';
import sources from '../../constants/sources.js';

function addLayer({ map }) {
  map.addLayer(getLayer());
}

function getLayer() {
  return {
    id: layers.DISTRICT_BOUNDARIES_OPERATOR,
    paint: {
      'line-color': colors.WHITE,
      'line-width': 3,
    },
    source: sources.DISTRICT_BOUNDARIES,
    type: 'line',
  };
}

export default addLayer;
