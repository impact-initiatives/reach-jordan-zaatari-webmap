import turfCenter from '@turf/center';
import * as topojson from 'topojson-client';
import keys from '../../constants/keys/block-boundaries.js';
import reach from '../../constants/reach.js';
import sources from '../../constants/sources.js';
import utils from '../utils/index.js';

function sourceBlockBoundariesPoint({ map }) {
  return fetch(reach.BLOCK_BOUNDARIES)
    .then((response) => response.json())
    .then((topo) => {
      const layerName = Object.keys(topo.objects)[0];
      const { features } = topojson.feature(topo, topo.objects[layerName]);
      const points = features.map(modifyFeatures);
      utils.addSourceToMap({ features, map, sourceId: sources.BLOCK_BOUNDARIES });
      utils.addSourceToMap({ features: points, map, sourceId: sources.BLOCK_BOUNDARIES_POINT });
    });
}

function modifyFeatures(feature) {
  const center = turfCenter(feature);
  center.properties[keys.NAME_EN] = feature.properties[keys.NAME_EN];
  center.properties[keys.NAME_AR] = feature.properties[keys.NAME_AR];
  return center;
}

export default sourceBlockBoundariesPoint;
