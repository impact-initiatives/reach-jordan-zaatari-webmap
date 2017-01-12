import reach from '../../constants/reach.js';
import utils from '../utils/index.js';
import sources from '../../constants/sources.js';
import keys from '../../constants/keys/septic-tanks.js';

function sourceSepticTanks({ map }) {
  return fetch(reach.SEPTIC_TANKS)
    .then((response) => response.json())
    .then(({ features }) => addSource({ features, map }));
}

function addSource({ features, map }) {
  const featuresMapped = features.map(mapFeatures);
  utils.addSourceToMap({ features: featuresMapped, map, sourceId: sources.SEPTIC_TANKS });
}

function mapFeatures(feature) {
  const houses = (feature.properties[keys.HOUSES] || '').split(',');
  return {
    ...feature,
    properties: {
      ...feature.properties,
      ...houses,
    },
  };
}

export default sourceSepticTanks;
