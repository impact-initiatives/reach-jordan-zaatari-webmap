import turfCenter from 'turf-center';
import { REACH } from '../../constants/resources.js';
import { WHITE } from '../../constants/colors.js';

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
      map.addSource('district-points', {
        data: {
          type: 'FeatureCollection',
          features: points,
        },
        type: 'geojson',
      });
      map.addLayer({
        id: 'district-points-text',
        layout: {
          'text-field': '{nameEn}',
          'text-font': ['open-sans-regular'],
        },
        paint: {
          'text-halo-color': WHITE,
          'text-halo-width': 1.5,
        },
        source: 'district-points',
        type: 'symbol',
      });
    });
}
