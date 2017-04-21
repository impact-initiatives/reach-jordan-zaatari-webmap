import * as colors from '../../constants/colors.js';
import layers from '../../constants/layers.js';
import sources from '../../constants/sources.js';

function addLayer({ map }) {
  map.addLayer(getLayer());
}

function getLayer() {
  return {
    id: layers.CAMP_FACILITIES,
    paint: {
      'fill-color': colors.DARK_GREY_30,
      'fill-opacity': 0.9,
      'fill-outline-color': colors.WHITE,
    },
    source: sources.CAMP_FACILITIES,
    type: 'fill',
  };
}

export default addLayer;
