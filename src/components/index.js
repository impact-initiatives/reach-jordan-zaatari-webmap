import React from 'react';
import radium from 'radium';
import Districts from './districts/index.js';
import Blocks from './blocks/index.js';
import Health from './health/index.js';

export default radium(({ state }) => {
  const { hash } = location;
  if (/^#\/districts/.test(hash)) {
    return <Districts state={state} />;
  }
  if (/^#\/blocks/.test(hash)) {
    return <Blocks state={state} />;
  }
  if (/^#\/health/.test(hash)) {
    return <Health state={state} />;
  }
  window.location.assign('#/health');
  return <Health state={state} />;
});
