import * as topojson from 'topojson-client';
import reach from '../../constants/reach.js';
import utils from '../utils/index.js';
import sources from '../../constants/sources.js';

function sourceRoads({ map }) {
  return fetch(reach.ROADS)
    .then((response) => response.json())
    .then((topo) => {
      const layerName = Object.keys(topo.objects)[0];
      const { features } = topojson.feature(topo, topo.objects[layerName]);
      const newFeatures = features.map(modifyFeatures);
      utils.addSourceToMap({ features: newFeatures, map, sourceId: sources.ROADS });
    });
}

function modifyFeatures(feature) {
  const newFeature = feature;
  return newFeature;
}

export default sourceRoads;
