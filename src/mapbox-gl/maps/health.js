import utils from '../utils/index.js';
import initGeolocation from '../layers/geolocation.js';
import addDistrictOutline from '../layers/district-outline.js';
import addDistrictText from '../layers/district-text.js';
import addBlockFill from '../layers/block-fill.js';
import addCampFacilitiesHealth from '../layers/camp-facilities-health.js';
import addCampFacilitiesText from '../layers/camp-facilities-text.js';

function loadStyles({ map }) {
  addDistrictOutline({ map });
  addBlockFill({ map });
  addCampFacilitiesHealth({ map });
  addCampFacilitiesText({ map });
  addDistrictText({ map, maxzoom: true });
  initGeolocation({ map });
}

export default function healthMap() {
  const map = utils.createMap();
  map.on('style.load', () => loadStyles({ map }));
}
