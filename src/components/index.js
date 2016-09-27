import React from 'react';
import radium from 'radium';
import District from './district/index.js';
import Block from './block/index.js';
import Health from './health/index.js';

export default radium(({ state }) => {
  const { hash } = location;
  if (/^#\/district/.test(hash)) {
    return <District state={state} />;
  }
  if (/^#\/block/.test(hash)) {
    return <Block state={state} />;
  }
  if (/^#\/health/.test(hash)) {
    return <Health state={state} />;
  }
  window.location.assign('#/health');
  return <Health state={state} />;
});
