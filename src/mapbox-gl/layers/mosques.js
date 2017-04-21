import mapbox from '../../constants/mapbox.js';
import layers from '../../constants/layers.js';
import sources from '../../constants/sources.js';

function households({ map }) {
  map.addLayer(getLayer({ maxzoom: true, size: 0.1, id: '-small' }));
  map.addLayer(getLayer({ minzoom: true, size: 0.2, is: '-large' }));
}

function getLayer({ id, minzoom, maxzoom, size }) {
  return {
    id: layers.MOSQUES + id,
    source: sources.MOSQUES,
    minzoom: minzoom ? mapbox.LABEL_ZOOM_BREAK : mapbox.MIN_ZOOM,
    maxzoom: maxzoom ? mapbox.LABEL_ZOOM_BREAK : mapbox.MAX_ZOOM,
    layout: {
      'icon-image': sources.MOSQUE_IMAGE,
      'icon-size': size,
      'icon-allow-overlap': true,
    },
    type: 'symbol',
  };
}

export default households;
