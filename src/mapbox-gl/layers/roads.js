import * as colors from '../../constants/colors.js';
import layers from '../../constants/layers.js';
import sources from '../../constants/sources.js';
import * as columns from '../../constants/columns/roads.js';

function addLayer({ map }) {
  map.addLayer(getLayer());
}

function getLayer() {
  return {
    id: layers.ROADS,
    paint: {
      'line-color': {
        property: columns.type.KEY,
        stops: [
          [columns.type.values.PAVED, colors.DARK_GREY_50],
          [columns.type.values.UNPAVED, colors.BEIGE_100],
        ],
        type: 'categorical',
      },
      'line-width': 2,
    },
    source: sources.ROADS,
    type: 'line',
  };
}

export default addLayer;
