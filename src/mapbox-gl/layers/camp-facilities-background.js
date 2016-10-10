import { REACH } from '../../constants/resources.js';
import COLORS from '../../constants/colors.js';

const SOURCE_ID_FEATURE = 'camp-facilities';
const LAYER_ID_FEATURE = 'camp-facilities-background';
const LAYER_ID_FEATURE_OUTLINE = 'camp-facilities-background-outline';

export default function ({ map }) {
  if (!map.getSource(SOURCE_ID_FEATURE)) {
    map.addSource(SOURCE_ID_FEATURE, {
      data: REACH.CAMP_FACILITIES,
      type: 'geojson',
    });
  }
  map.addLayer({
    id: LAYER_ID_FEATURE,
    paint: {
      'fill-color': COLORS.DARK_GREY_30,
      'fill-opacity': 0.9,
    },
    source: SOURCE_ID_FEATURE,
    type: 'fill',
  });
  map.addLayer({
    id: LAYER_ID_FEATURE_OUTLINE,
    paint: {
      'line-color': COLORS.LIGHT_GREY_100,
      'line-opacity': 0.9,
    },
    source: SOURCE_ID_FEATURE,
    type: 'line',
  });
}
