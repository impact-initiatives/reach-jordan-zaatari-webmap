import reach from '../../constants/reach.js';
import colors from '../../constants/colors.js';
import utils from '../utils/index.js';
import layer from '../../constants/layers/camp-facilities-background.js';

function fetchLayer({ map }) {
  fetch(reach.CAMP_FACILITIES)
    .then((response) => response.json())
    .then(({ features }) => addLayer({ features, map }));
}

function addLayer({ features, map }) {
  utils.addSourceToMap({ features, map, sourceId: layer.SOURCE_ID });
  map.addLayer(getLayer());
}

function getLayer() {
  return {
    id: layer.LAYER_ID,
    paint: {
      'fill-color': colors.DARK_GREY_30,
      'fill-opacity': 0.9,
      'fill-outline-color': colors.WHITE,
    },
    source: layer.SOURCE_ID,
    type: 'fill',
  };
}

export default function campFacilitiesBackground({ map }) {
  fetchLayer({ map });
}
