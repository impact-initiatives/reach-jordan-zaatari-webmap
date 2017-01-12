import turfCenter from '@turf/center';
import reach from '../../constants/reach.js';
import keys from '../../constants/keys/district-boundaries.js';
import sources from '../../constants/sources.js';
import utils from '../utils/index.js';

function sourceDistrictBoundariesPoint({ map }) {
  return fetch(reach.DISTRICT_BOUNDARIES)
    .then((response) => response.json())
    .then(({ features }) => {
      const points = features.map(modifyFeatures);
      utils.addSourceToMap({ features: points, map, sourceId: sources.DISTRICT_BOUNDARIES_POINT });
    });
}

function modifyFeatures(feature) {
  const center = turfCenter(feature);
  center.properties[keys.NAME_EN] = feature.properties[keys.NAME_EN];
  center.properties[keys.NAME_AR] = feature.properties[keys.NAME_AR];
  return center;
}

export default sourceDistrictBoundariesPoint;
