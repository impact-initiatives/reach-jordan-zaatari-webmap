import store from '../../store/index.js';
import colors from '../../constants/colors.js';
import layers from '../../constants/layers.js';
import sources from '../../constants/sources.js';
import utils from '../utils/index.js';

function steelTanks({ map }) {
  store.subscribe(() => modifyLayer({ map }));
  map.addLayer(getLayer());
  modifyLayer({ map });
}

function modifyLayer({ map }) {
  utils.modifySteelLayer({ map, layerId: layers.HOUSEHOLDS });
}

function getLayer() {
  return {
    id: layers.HOUSEHOLDS,
    paint: {
      'circle-color': colors.DARK_GREY_100,
      'circle-radius': 3,
      'circle-opacity': 0.8,
    },
    source: sources.HOUSEHOLDS,
    type: 'circle',
  };
}

export default steelTanks;
