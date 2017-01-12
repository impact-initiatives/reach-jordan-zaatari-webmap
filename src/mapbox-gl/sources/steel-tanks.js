import reach from '../../constants/reach.js';
import utils from '../utils/index.js';
import sources from '../../constants/sources.js';
import keys from '../../constants/keys/steel-tanks.js';

function sourceSteelTanks({ map }) {
  return fetch(reach.STEEL_TANKS)
    .then((response) => response.json())
    .then(({ features }) => addSource({ features, map }));
}

function addSource({ features, map }) {
  const mappedFeatures = features.map(convertNullToString);
  utils.addSourceToMap({ features: mappedFeatures, map, sourceId: sources.STEEL_TANKS });
}

function convertNullToString(feature) {
  return {
    ...feature,
    properties: {
      ...feature.properties,
      [keys.NAME]: feature.properties[keys.NAME] || '',
    },
  };
}

export default sourceSteelTanks;
