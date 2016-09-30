import React from 'react';
import radium from 'radium';
import Districts from './districts/index.js';
import Blocks from './blocks/index.js';
import Health from './health/index.js';
import WasteWater from './waste-water/index.js';

export default radium(({ state }) => {
  const { hash } = location;
  if (hash.includes('#/districts')) {
    return <Districts state={state} />;
  }
  if (hash.includes('#/blocks')) {
    return <Blocks state={state} />;
  }
  if (hash.includes('#/health')) {
    return <Health state={state} />;
  }
  if (hash.includes('#/waste-water')) {
    return <WasteWater state={state} />;
  }
  window.location.assign('#/districts');
  return <Health state={state} />;
});
