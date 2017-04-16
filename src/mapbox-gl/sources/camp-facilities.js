import turfCenter from '@turf/center';
import * as topojson from 'topojson-client';
import reach from '../../constants/reach.js';
import utils from '../utils/index.js';
import sources from '../../constants/sources.js';
import keys from '../../constants/keys/camp-facilities.js';

function sourceCampFacilities({ map }) {
  return fetch(reach.CAMP_FACILITIES)
    .then((response) => response.json())
    .then((topo) => {
      const layerName = Object.keys(topo.objects)[0];
      const { features } = topojson.feature(topo, topo.objects[layerName]);
      const points = features.map(modifyFeatures);
      utils.addSourceToMap({ features, map, sourceId: sources.CAMP_FACILITIES });
      utils.addSourceToMap({ features: points, map, sourceId: sources.CAMP_FACILITIES_POINT });
    });
}

function modifyFeatures(feature) {
  const center = turfCenter(feature);
  center.properties[keys.NAME_EN] = feature.properties[keys.NAME_EN];
  center.properties[keys.NAME_AR] = feature.properties[keys.NAME_AR];
  return center;
}

export default sourceCampFacilities;
