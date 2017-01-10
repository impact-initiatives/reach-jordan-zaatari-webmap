import { reach } from '../../constants/resources.js';
import utils from '../utils/index.js';
import sources from '../../constants/sources.js';

function sourceBlockBoundaries({ map }) {
  return fetch(reach.BLOCK_BOUNDARIES)
    .then((response) => response.json())
    .then(({ features }) => {
      utils.addSourceToMap({ features, map, sourceId: sources.BLOCK_BOUNDARIES });
    });
}

export default sourceBlockBoundaries;
