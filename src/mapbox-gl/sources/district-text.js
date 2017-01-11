import turfCenter from '@turf/center';
// import store from '../../store/index.js';
import reach from '../../constants/reach.js';
import COLORS from '../../constants/colors.js';
import utils from '../utils/index.js';
import layer from '../../constants/layers/district-text.js';
import mapbox from '../../constants/mapbox.js';
import language from '../../constants/language.js';

function fetchLayer({ map, maxzoom }) {
  fetch(reach.DISTRICT_BOUNDARIES)
    .then((response) => response.json())
    .then(({ features }) => addLayer({ features, map, maxzoom }));
}

function addLayer({ features, map, maxzoom }) {
  const points = features.map(modifyFeatures);
  utils.addSourceToMap({ features: points, map, sourceId: layer.SOURCE_ID });
  map.addLayer(getLayerOptions({ maxzoom }));
}

function modifyFeatures(feature) {
  const center = turfCenter(feature);
  const propNameEn = layer.propName[language.EN];
  const propNameAr = layer.propName[language.AR];
  center.properties[propNameEn] = feature.properties[propNameEn];
  center.properties[propNameAr] = feature.properties[propNameAr];
  return center;
}

function getLayerOptions({ maxzoom }) {
  // const { lang } = store.getState();
  return {
    id: layer.LAYER_ID,
    layout: {
      'text-field': `{${layer.propName[language.EN]}}`,
      'text-font': ['open-sans-regular'],
    },
    maxzoom: maxzoom ? mapbox.LABEL_ZOOM_BREAK : mapbox.MAX_ZOOM,
    paint: {
      'text-halo-color': COLORS.WHITE,
      'text-halo-width': 1.5,
    },
    source: layer.SOURCE_ID,
    type: 'symbol',
  };
}

export default function districtText({ map, maxzoom }) {
  fetchLayer({ map, maxzoom });
}
