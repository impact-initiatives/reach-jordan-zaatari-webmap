import turfCenter from '@turf/center';
// import store from '../../store/index.js';
import { reach } from '../../constants/resources.js';
import COLORS from '../../constants/colors.js';
import utils from '../utils/index.js';
import layer from '../../constants/layers/district-text.js';
import { LABEL_ZOOM_BREAK, MAX_ZOOM } from '../../constants/mapbox-gl.js';
import { ARABIC, ENGLISH } from '../../constants/language.js';

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
  const propNameEn = layer.propName[ENGLISH];
  const propNameAr = layer.propName[ARABIC];
  center.properties[propNameEn] = feature.properties[propNameEn];
  center.properties[propNameAr] = feature.properties[propNameAr];
  return center;
}

function getLayerOptions({ maxzoom }) {
  // const { lang } = store.getState();
  return {
    id: layer.LAYER_ID,
    layout: {
      'text-field': `{${layer.propName[ENGLISH]}}`,
      'text-font': ['open-sans-regular'],
    },
    maxzoom: maxzoom ? LABEL_ZOOM_BREAK : MAX_ZOOM,
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
