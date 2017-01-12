import reach from '../../constants/reach.js';
import utils from '../utils/index.js';
import sources from '../../constants/sources.js';

function sourceDistrictBoundaries({ map }) {
  return fetch(reach.DISTRICT_BOUNDARIES)
    .then((response) => response.json())
    .then(({ features }) => {
      utils.addSourceToMap({ features, map, sourceId: sources.DISTRICT_BOUNDARIES });
    });
}

export default sourceDistrictBoundaries;
