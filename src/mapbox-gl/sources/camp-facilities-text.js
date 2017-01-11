import turfCenter from '@turf/center';
// import store from '../../store/index.js';
import reach from '../../constants/reach.js';
import colors from '../../constants/colors.js';
import mapbox from '../../constants/mapbox.js';
import utils from '../utils/index.js';
import layer from '../../constants/layers/camp-facilities-text.js';
import language from '../../constants/language.js';

function fetchLayer({ map }) {
  fetch(reach.CAMP_FACILITIES)
    .then((response) => response.json())
    .then(({ features }) => addLayer({ features, map }));
}

function addLayer({ features, map }) {
  const points = features.map(modifyFeatures);
  utils.addSourceToMap({ features: points, map, sourceId: layer.SOURCE_ID });
  map.addLayer(getLayer());
}

function modifyFeatures(feature) {
  const center = turfCenter(feature);
  const propNameEn = layer.propName[language.EN];
  const propNameAr = layer.propName[language.AR];
  center.properties[propNameEn] = feature.properties[propNameEn];
  center.properties[propNameAr] = feature.properties[propNameAr];
  return center;
}

function getLayer() {
  // const { lang } = store.getState();
  return {
    id: layer.LAYER_ID,
    layout: {
      'text-field': `{${layer.propName[language.EN]}}`,
      'text-font': ['open-sans-regular'],
    },
    minzoom: mapbox.LABEL_ZOOM_BREAK,
    paint: {
      'text-halo-color': colors.WHITE,
      'text-halo-width': 1.5,
    },
    source: layer.SOURCE_ID,
    type: 'symbol',
  };
}

export default fetchLayer;
