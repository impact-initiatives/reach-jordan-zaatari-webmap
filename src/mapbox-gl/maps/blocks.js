import utils from '../utils/index.js';
import initGeolocation from '../layers/geolocation.js';
import addDistrictOutline from '../layers/district-outline.js';
import addBlockFill from '../layers/block-fill.js';
import addBlockText from '../layers/block-text.js';

function loadStyles({ map }) {
  initGeolocation({ map });
  addDistrictOutline({ map });
  addBlockFill({ map });
  addBlockText({ map });
}

export default function blockMap() {
  const map = utils.createMap();
  map.on('style.load', () => loadStyles({ map }));
}
