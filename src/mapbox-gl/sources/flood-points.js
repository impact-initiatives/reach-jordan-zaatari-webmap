import reach from '../../constants/reach.js';
import sources from '../../constants/sources.js';
import keys from '../../constants/keys/flood-points.js';
import utils from '../utils/index.js';

function sourceFloodPoints({ map }) {
  let partnerFeatures;
  let unicefFeatures;
  const pointsPartners = fetch(reach.FLOOD_POINTS)
    .then((response) => response.json())
    .then(({ features }) => {
      partnerFeatures = features.map(convertNullToString);
    });
  const pointsUnicef = fetch(reach.FLOOD_POINTS_UNICEF)
    .then((response) => response.json())
    .then(({ features }) => {
      unicefFeatures = features;
    });
  return Promise.all([pointsPartners, pointsUnicef])
    .then(() => {
      const mergedFeatures = [...partnerFeatures, ...unicefFeatures];
      utils.addSourceToMap({ features: mergedFeatures, map, sourceId: sources.FLOOD_POINTS });
    });
}

function convertNullToString(feature) {
  return {
    ...feature,
    properties: {
      ...feature.properties,
      [keys.NUMBER]: feature.properties[keys.NUMBER] !== null ?
        feature.properties[keys.NUMBER] : '',
    },
  };
}

export default sourceFloodPoints;
