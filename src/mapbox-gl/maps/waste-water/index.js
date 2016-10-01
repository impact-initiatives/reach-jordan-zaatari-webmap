import OPTIONS from '../../../constants/mapbox-gl.js';
import addOptions from '../../constructor/options.js';
import closeSidebars from '../../constructor/close-sidebars.js';
import initGeolocation from '../../interactions/geolocation.js';
import addDistrictLine from '../../layers/district-outline.js';
import addBlockFill from '../../layers/block-fill.js';
import addPipeLines from '../../layers/pipe-lines.js';
import addSepticTanks from '../../layers/septic-tanks.js';

const { mapboxgl } = window;

function loadStyles({ map }) {
  initGeolocation({ map });
  addDistrictLine({ map });
  addBlockFill({ map });
  addPipeLines({ map });
  addSepticTanks({ map });
}

export default function () {
  const map = new mapboxgl.Map(OPTIONS);
  addOptions({ map });
  map.on('mousedown', closeSidebars);
  map.on('movestart', closeSidebars);
  map.on('style.load', () => loadStyles({ map }));
}
