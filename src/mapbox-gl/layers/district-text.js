import turfCenter from 'turf-center';
import { REACH } from '../../constants/resources.js';
import { WHITE } from '../../constants/colors.js';

export default function ({ map }) {
  fetch(REACH.DISTRICT_BOUNDARIES)
    .then((response) => response.json())
    .then(({ features }) => {
      const points = features.map((feature) => {
        const center = turfCenter(feature);
        center.properties.name = `D${feature.properties.Name.split(' ')[1]}`;
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
          'text-field': '{name}',
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
