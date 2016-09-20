import React from 'react';
import radium from 'radium';
import Health from './health/index.js';

export default radium(({ state }) => {
  const { hash } = location;
  if (/^#\/health/.test(hash)) {
    return <Health state={state} />;
  }
  window.location.assign('#/health');
  return <Health state={state} />;
});
