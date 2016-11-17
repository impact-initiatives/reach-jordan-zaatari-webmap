import turfCenter from '@turf/center';
import { REACH } from '../../constants/resources.js';
import COLORS from '../../constants/colors.js';
import { LABEL_ZOOM_BREAK } from '../../constants/mapbox-gl.js';

const SOURCE_ID = 'camp-facility-points';
const LAYER_ID = 'camp-facility-points-text';

export default function ({ map }) {
  fetch(REACH.CAMP_FACILITIES)
    .then((response) => response.json())
    .then(({ features }) => {
      const points = features.map((feature) => {
        const center = turfCenter(feature);
        center.properties.nameEn = feature.properties.Name_EN;
        center.properties.nameAr = feature.properties.Name_AR;
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
        minzoom: LABEL_ZOOM_BREAK,
        paint: {
          'text-halo-color': COLORS.WHITE,
          'text-halo-width': 1.5,
        },
        source: SOURCE_ID,
        type: 'symbol',
      });
    });
}
