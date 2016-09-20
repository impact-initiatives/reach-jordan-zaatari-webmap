import React from 'react';
import radium from 'radium';
import Health from './health/index.js';

export default radium(({ state }) => {
  const { hash } = location;
  if (/^#\/health/.test(hash)) {
    return <Health state={state} />;
  }
  location.assign('#/health');
  return <Health state={state} />;
});
