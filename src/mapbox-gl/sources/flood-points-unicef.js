import reach from '../../constants/reach.js';
import sources from '../../constants/sources.js';
import utils from '../utils/index.js';

function sourceFloodPointsUnicef({ map }) {
  return fetch(reach.FLOOD_POINTS_UNICEF)
    .then((response) => response.json())
    .then(({ features }) => {
      utils.addSourceToMap({ features, map, sourceId: sources.FLOOD_POINTS_UNICEF });
    });
}

export default sourceFloodPointsUnicef;
