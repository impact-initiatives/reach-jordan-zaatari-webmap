import React from 'react';
import Districts from './districts/index.js';
import Blocks from './blocks/index.js';
import Health from './health/index.js';
import WasteWater from './waste-water/index.js';

export default ({ state }) => {
  const hash = location.hash.split('?')[0];
  if (hash === '#/districts') {
    return <Districts state={state} />;
  }
  if (hash === '#/blocks') {
    return <Blocks state={state} />;
  }
  if (hash === '#/health') {
    return <Health state={state} />;
  }
  if (hash === '#/waste-water') {
    return <WasteWater state={state} />;
  }
  location.assign('#/waste-water');
  return <Health state={state} />;
};
