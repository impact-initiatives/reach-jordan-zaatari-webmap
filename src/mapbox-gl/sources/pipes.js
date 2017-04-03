import reach from '../../constants/reach.js';
import utils from '../utils/index.js';
import sources from '../../constants/sources.js';
import keys from '../../constants/keys/pipes.js';

function sourcePipes({ map }) {
  return fetch(reach.PIPES)
    .then((response) => response.json())
    .then(({ features }) => {
      const newFeatures = features.map(modifyFeatures);
      utils.addSourceToMap({ features: newFeatures, map, sourceId: sources.PIPES });
    });
}

function modifyFeatures(feature) {
  const newFeature = feature;
  newFeature.properties[keys.ID] = '';
  return newFeature;
}

export default sourcePipes;
