import reach from '../../constants/reach.js';
import utils from '../utils/index.js';
import sources from '../../constants/sources.js';

function sourceCampFacilities({ map }) {
  return fetch(reach.CAMP_FACILITIES)
    .then((response) => response.json())
    .then(({ features }) => {
      utils.addSourceToMap({ features, map, sourceId: sources.CAMP_FACILITIES });
    });
}

export default sourceCampFacilities;
