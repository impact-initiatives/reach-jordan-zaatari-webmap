import utils from '../utils/index.js';
import initGeolocation from '../layers/geolocation.js';
import addDistrictOutline from '../layers/district-outline.js';
import addDistrictText from '../layers/district-text.js';
import addBlockFill from '../layers/block-fill.js';
import addCampFacilitiesBackground from '../layers/camp-facilities-background.js';
import addCampFacilitiesText from '../layers/camp-facilities-text.js';
import addPipeLines from '../layers/pipe-lines.js';
import addSepticTankSize from '../layers/septic-tank-size.js';
import addSteelTankFill from '../layers/steel-tank-fill.js';

function loadStyles({ map }) {
  initGeolocation({ map });
  addDistrictOutline({ map });
  addDistrictText({ map, maxzoom: true });
  addBlockFill({ map });
  addCampFacilitiesBackground({ map });
  addCampFacilitiesText({ map });
  addPipeLines({ map });
  addSteelTankFill({ map });
  addSepticTankSize({ map });
}

export default function wasteWaterMap() {
  const map = utils.createMap();
  map.on('style.load', () => loadStyles({ map }));
}
