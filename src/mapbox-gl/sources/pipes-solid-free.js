import reach from '../../constants/reach.js';
import utils from '../utils/index.js';
import sources from '../../constants/sources.js';
import keys from '../../constants/keys/pipes-septic.js';

function sourcePipes({ map }) {
  return fetch(reach.PIPES_SOLID_FREE)
    .then((response) => response.json())
    .then(({ features }) => {
      const newFeatures = features.map(modifyFeatures);
      utils.addSourceToMap({ features: newFeatures, map, sourceId: sources.PIPES_SOLID_FREE });
    });
}

function modifyFeatures(feature) {
  const newFeature = feature;
  newFeature.properties[keys.ID] = '';
  return newFeature;
}

export default sourcePipes;
