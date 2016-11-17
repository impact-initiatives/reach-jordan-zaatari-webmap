import turfCenter from '@turf/center';
import { REACH } from '../../constants/resources.js';
import COLORS from '../../constants/colors.js';
import { LABEL_ZOOM_BREAK, MAX_ZOOM } from '../../constants/mapbox-gl.js';

export default function ({ map, maxzoom }) {
  fetch(REACH.DISTRICT_BOUNDARIES)
    .then((response) => response.json())
    .then(({ features }) => {
      const points = features.map((feature) => {
        const center = turfCenter(feature);
        center.properties.name = `D${feature.properties.Name.split(' ')[1]}`;
        return center;
      });
      if (!map.getSource('district-points')) {
        map.addSource('district-points', {
          data: {
            type: 'FeatureCollection',
            features: points,
          },
          type: 'geojson',
        });
      }
      map.addLayer({
        id: 'district-points-text',
        layout: {
          'text-field': '{name}',
          'text-font': ['open-sans-regular'],
        },
        maxzoom: maxzoom ? LABEL_ZOOM_BREAK : MAX_ZOOM,
        paint: {
          'text-halo-color': COLORS.WHITE,
          'text-halo-width': 1.5,
        },
        source: 'district-points',
        type: 'symbol',
      });
    });
}
