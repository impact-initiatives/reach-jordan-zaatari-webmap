import reach from '../../constants/reach.js';
import sources from '../../constants/sources.js';
import utils from '../utils/index.js';

function sourceFloodLines({ map }) {
  return fetch(reach.FLOOD_LINES)
    .then((response) => response.json())
    .then(({ features }) => {
      utils.addSourceToMap({ features, map, sourceId: sources.FLOOD_LINES });
    });
}

export default sourceFloodLines;
