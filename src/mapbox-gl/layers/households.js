import store from '../../store/index.js';
import colors from '../../constants/colors.js';
import mapbox from '../../constants/mapbox.js';
import layers from '../../constants/layers.js';
import sources from '../../constants/sources.js';
import utils from '../utils/index.js';

function households({ map }) {
  store.subscribe(() => modifyLayer({ map }));
  map.addLayer(getLayer());
  modifyLayer({ map });
}

function modifyLayer({ map }) {
  utils.modifyHouseholdsLayer({ map, layerId: layers.HOUSEHOLDS });
}

function getLayer() {
  return {
    id: layers.HOUSEHOLDS,
    minzoom: mapbox.HOUSEHOLD_ZOOM_BREAK,
    paint: {
      'circle-color': colors.DARK_GREY_100,
      'circle-radius': 3,
      'circle-opacity': 0.8,
    },
    source: sources.HOUSEHOLDS,
    type: 'circle',
  };
}

export default households;
