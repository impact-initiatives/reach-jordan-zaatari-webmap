import * as topojson from 'topojson-client';
import reach from '../../constants/reach.js';
import utils from '../utils/index.js';
import sources from '../../constants/sources.js';
import keys from '../../constants/keys/pipes-septic.js';

function sourcePipes({ map }) {
  return fetch(reach.PIPES_SEPTIC)
    .then((response) => response.json())
    .then((topo) => {
      const layerName = Object.keys(topo.objects)[0];
      const { features } = topojson.feature(topo, topo.objects[layerName]);
      const newFeatures = features.map(modifyFeatures);
      utils.addSourceToMap({ features: newFeatures, map, sourceId: sources.PIPES_SEPTIC });
    });
}

function modifyFeatures(feature) {
  const newFeature = feature;
  newFeature.properties[keys.ID] = '';
  return newFeature;
}

export default sourcePipes;
