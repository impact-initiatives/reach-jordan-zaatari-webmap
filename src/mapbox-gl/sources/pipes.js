import reach from '../../constants/reach.js';
import utils from '../utils/index.js';
import sources from '../../constants/sources.js';

function sourcePipes({ map }) {
  return fetch(reach.PIPES)
    .then((response) => response.json())
    .then(({ features }) => {
      utils.addSourceToMap({ features, map, sourceId: sources.PIPES });
    });
}

export default sourcePipes;
