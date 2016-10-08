import React from 'react';
import radium from 'radium';
import Districts from './districts/index.js';
// import DistrictsWasteWater from './districts-waste-water/index.js';
import Blocks from './blocks/index.js';
import Health from './health/index.js';
import WasteWater from './waste-water/index.js';

export default radium(({ state }) => {
  const hash = location.hash.split('?')[0];
  if (hash === '#/districts') {
    return <Districts state={state} />;
  }
  // if (hash === '#/districts-waste-water') {
  //   return <DistrictsWasteWater state={state} />;
  // }
  if (hash === '#/blocks') {
    return <Blocks state={state} />;
  }
  if (hash === '#/health') {
    return <Health state={state} />;
  }
  if (hash === '#/waste-water') {
    return <WasteWater state={state} />;
  }
  window.location.assign('#/districts');
  return <Health state={state} />;
});
