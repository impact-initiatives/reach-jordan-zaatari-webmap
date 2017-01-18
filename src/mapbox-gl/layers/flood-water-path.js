import colors from '../../constants/colors.js';
import layers from '../../constants/layers.js';
import sources from '../../constants/sources.js';
import values from '../../constants/values/flood-water-path.js';

function addLayer({ map }) {
  map.addLayer(getLayer({ width: values.gridCode.SMALL }), layers.CAMP_FACILITIES);
  map.addLayer(getLayer({ width: values.gridCode.LARGE }), layers.CAMP_FACILITIES);
}

function getLayer({ width }) {
  return {
    id: layers.FLOOD_WATER_PATH + width,
    layout: {
      'line-cap': 'round',
    },
    paint: {
      'line-color': colors.BLUE_GREY,
      'line-width': width,
      'line-opacity': 0.5,
    },
    source: sources.FLOOD_WATER_PATH + width,
    type: 'line',
  };
}

export default addLayer;
