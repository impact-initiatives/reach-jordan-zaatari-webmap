import turfCenter from '@turf/center';
import reach from '../../constants/reach.js';
import utils from '../utils/index.js';
import sources from '../../constants/sources.js';
import keys from '../../constants/keys/camp-facilities.js';

function sourceCampFacilitiesPoint({ map }) {
  return fetch(reach.CAMP_FACILITIES)
    .then((response) => response.json())
    .then(({ features }) => {
      const points = features.map(modifyFeatures);
      utils.addSourceToMap({ features: points, map, sourceId: sources.CAMP_FACILITIES_POINT });
    });
}

function modifyFeatures(feature) {
  const center = turfCenter(feature);
  center.properties[keys.NAME_EN] = feature.properties[keys.NAME_EN];
  center.properties[keys.NAME_AR] = feature.properties[keys.NAME_AR];
  return center;
}

export default sourceCampFacilitiesPoint;
