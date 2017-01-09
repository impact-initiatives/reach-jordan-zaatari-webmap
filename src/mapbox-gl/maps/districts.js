import utils from '../utils/index.js';
import initGeolocation from '../layers/geolocation.js';
import addDistrictOperators from '../layers/district-operators.js';
import addDistrictLine from '../layers/district-outline.js';
import addDistrictText from '../layers/district-text.js';

function loadStyles({ map }) {
  initGeolocation({ map });
  addDistrictOperators({ map });
  addDistrictLine({ map });
  addDistrictText({ map });
}

export default function districtMap() {
  const map = utils.createMap();
  map.on('style.load', () => loadStyles({ map }));
}
