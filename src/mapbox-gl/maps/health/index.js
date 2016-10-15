import OPTIONS from '../../../constants/mapbox-gl.js';
import addOptions from '../../constructor/options.js';
import closeSidebars from '../../constructor/close-sidebars.js';
import initGeolocation from '../../interactions/geolocation.js';
import addDistrictOutline from '../../layers/district-outline.js';
import addDistrictText from '../../layers/district-text.js';
import addBlockFill from '../../layers/block-fill.js';
import addCampFacilitiesHealth from '../../layers/camp-facilities-health.js';
import addCampFacilitiesText from '../../layers/camp-facilities-text.js';

const { mapboxgl } = window;

function loadStyles({ map }) {
  initGeolocation({ map });
  addDistrictOutline({ map });
  addDistrictText({ map, maxzoom: true });
  addBlockFill({ map });
  addCampFacilitiesHealth({ map });
  addCampFacilitiesText({ map });
}

export default function () {
  const map = new mapboxgl.Map(OPTIONS);
  addOptions({ map });
  map.on('mousedown', closeSidebars);
  map.on('zoomstart', closeSidebars);
  map.on('style.load', () => loadStyles({ map }));
}
