import reach from '../../constants/reach.js';
import sources from '../../constants/sources.js';
import keys from '../../constants/keys/flood-water-path.js';
import values from '../../constants/values/flood-water-path.js';
import utils from '../utils/index.js';

function sourceFloodWaterPath({ map }) {
  return fetch(reach.FLOOD_WATER_PATH)
    .then((response) => response.json())
    .then(({ features }) => addSource({ features, map }));
}

function addSource({ features, map }) {
  createSource({ features, map, grid: [6, 7], width: values.gridCode.SMALL });
  createSource({ features, map, grid: [8, 9], width: values.gridCode.LARGE });
}

function createSource({ features, map, grid, width }) {
  const line = features.filter((feature) => (
    grid.includes(feature.properties[keys.GRID_CODE])
  ));
  utils.addSourceToMap({ features: line, map, sourceId: sources.FLOOD_WATER_PATH + width });
}

export default sourceFloodWaterPath;
