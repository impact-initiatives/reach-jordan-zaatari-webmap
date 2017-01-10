import turfCenter from '@turf/center';
import attributes from '../../constants/attributes.js';
import { reach } from '../../constants/resources.js';
import language from '../../constants/language.js';
import sources from '../../constants/sources.js';
import utils from '../utils/index.js';

function sourceBlockBoundariesPoint({ map }) {
  return fetch(reach.BLOCK_BOUNDARIES)
    .then((response) => response.json())
    .then(({ features }) => {
      const points = features.map(modifyFeatures);
      utils.addSourceToMap({ features: points, map, sourceId: sources.BLOCK_BOUNDARIES_POINT });
    });
}

function modifyFeatures(feature) {
  const center = turfCenter(feature);
  const propNameEn = attributes.blockBoundaries.propName[language.EN];
  const propNameAr = attributes.blockBoundaries.propName[language.AR];
  center.properties[propNameEn] = feature.properties[propNameEn];
  center.properties[propNameAr] = feature.properties[propNameAr];
  return center;
}

export default sourceBlockBoundariesPoint;
