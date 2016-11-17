import { BOUNDS, BEARING } from '../../constants/mapbox-gl.js';

const { mapboxgl } = window;

export default function ({ map }) {
  map.fitBounds(BOUNDS, { duration: 0 });
  map.setBearing(BEARING);
  map.dragRotate.disable();
  map.touchZoomRotate.disableRotation();
  map.addControl(new mapboxgl.NavigationControl());
}
