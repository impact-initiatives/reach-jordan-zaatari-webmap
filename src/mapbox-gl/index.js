import initDistricts from './maps/districts.js';
import initBlocks from './maps/blocks.js';
import initGeneral from './maps/general.js';
import initHealth from './maps/health.js';
import initWasteWater from './maps/waste-water.js';

function initMap() {
  const hash = location.hash.split('?')[0];
  if (hash === '#/districts') initDistricts();
  if (hash === '#/blocks') initBlocks();
  if (hash === '#/general') initGeneral();
  if (hash === '#/health') initHealth();
  if (hash === '#/waste-water') initWasteWater();
}

export default initMap;
