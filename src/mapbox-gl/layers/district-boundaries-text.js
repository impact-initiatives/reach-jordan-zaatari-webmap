import * as colors from '../../constants/colors.js';
import mapbox from '../../constants/mapbox.js';
import layers from '../../constants/layers.js';
import sources from '../../constants/sources.js';
import keys from '../../constants/keys/district-boundaries.js';

function addLayer({ map, maxzoom }) {
  map.addLayer(getLayer({ maxzoom }));
}

function getLayer({ maxzoom }) {
  return {
    id: layers.DISTRICT_BOUNDARIES_TEXT,
    layout: {
      'text-field': `{${keys.NAME_EN}}`,
      'text-font': ['open-sans-regular'],
    },
    maxzoom: maxzoom ? mapbox.LABEL_ZOOM_BREAK : mapbox.MAX_ZOOM,
    paint: {
      'text-halo-color': colors.WHITE,
      'text-halo-width': 1.5,
    },
    source: sources.DISTRICT_BOUNDARIES_POINT,
    type: 'symbol',
  };
}

export default addLayer;
