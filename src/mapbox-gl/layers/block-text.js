import turfCenter from '@turf/center';
import { REACH } from '../../constants/resources.js';
import COLORS from '../../constants/colors.js';

const SOURCE_ID = 'block-points';
const LAYER_ID = 'block-points-text';

export default function ({ map }) {
  fetch(REACH.BLOCK_BOUNDARIES)
    .then((response) => response.json())
    .then(({ features }) => {
      const points = features.map((feature) => {
        const center = turfCenter(feature);
        center.properties.nameEn = feature.properties.Block_Code;
        center.properties.nameAr = feature.properties.Name_Ar;
        return center;
      });
      if (!map.getSource(SOURCE_ID)) {
        map.addSource(SOURCE_ID, {
          data: {
            type: 'FeatureCollection',
            features: points,
          },
          type: 'geojson',
        });
      }
      map.addLayer({
        id: LAYER_ID,
        layout: {
          'text-field': '{nameEn}',
          'text-font': ['open-sans-regular'],
        },
        paint: {
          'text-halo-color': COLORS.WHITE,
          'text-halo-width': 1.5,
        },
        source: SOURCE_ID,
        type: 'symbol',
      });
    });
}
