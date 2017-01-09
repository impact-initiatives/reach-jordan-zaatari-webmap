// import store from '../../store/index.js';
import { reach } from '../../constants/resources.js';
import colors from '../../constants/colors.js';
import utils from '../utils/index.js';
import layer from '../../constants/layers/flood-water-path-fill.js';

function fetchLayer({ map }) {
  fetch(reach.FLOOD_WATER_PATH)
    .then((response) => response.json())
    .then(({ features }) => addLayer({ features, map }));
}

function addLayer({ features, map }) {
  createLayer({ features, map, grid: [6, 7], width: 1 });
  createLayer({ features, map, grid: [8, 9], width: 3 });
  // modifyLayer({ map });
}

function createLayer({ features, map, grid, width }) {
  const line = features.filter((feature) => (
    grid.includes(feature.properties[layer.PROP_GRID])
  ));
  utils.addSourceToMap({ features: line, map, sourceId: layer.SOURCE_ID + width });
  map.addLayer(getLayerOptions({ width }));
}

function getLayerOptions({ width }) {
  return {
    id: layer.LAYER_ID + width,
    layout: {
      'line-cap': 'round',
    },
    paint: {
      'line-color': colors.BLUE_GREY,
      'line-width': width,
      'line-opacity': 0.5,
    },
    source: layer.SOURCE_ID + width,
    type: 'line',
  };
}

export default function floodPointsFill({ map }) {
  // store.subscribe(() => modifyLayer({ map }));
  fetchLayer({ map });
}
