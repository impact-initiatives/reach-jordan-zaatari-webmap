import OPTIONS from '../../../constants/mapbox-gl.js';
import addOptions from '../../constructor/options.js';
import closeSidebars from '../../constructor/close-sidebars.js';
import initGeolocation from '../../interactions/geolocation.js';
import addDistrictOperators from '../../layers/district-operators.js';
import addDistrictLine from '../../layers/district-outline.js';
import addDistrictText from '../../layers/district-text.js';

const { mapboxgl } = window;

function loadStyles({ map }) {
  initGeolocation({ map });
  addDistrictOperators({ map });
  addDistrictLine({ map });
  addDistrictText({ map });
}

export default function () {
  const map = new mapboxgl.Map(OPTIONS);
  addOptions({ map });
  map.on('mousedown', closeSidebars);
  map.on('zoomstart', closeSidebars);
  map.on('style.load', () => loadStyles({ map }));
}
