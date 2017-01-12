import colors from '../../constants/colors.js';
import layers from '../../constants/layers.js';
import sources from '../../constants/sources.js';

function addLayer({ map }) {
  map.addLayer(getLayer());
}

function getLayer() {
  return {
    id: layers.DISTRICT_BOUNDARIES,
    paint: {
      'fill-color': colors.DARK_GREY_50,
      'fill-opacity': 0.25,
    },
    source: sources.BLOCK_BOUNDARIES,
    type: 'fill',
  };
}

export default addLayer;
