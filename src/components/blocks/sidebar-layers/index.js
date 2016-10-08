import React from 'react';
import radium from 'radium';
import { getSidebarRightStyle } from '../../../styles/animations.js';
import Legend from './legend/index.js';

export default radium(({ state }) => (
  <div style={getSidebarRightStyle({
    lang: state.lang,
    visible: state.sidebarLayers.open,
  })}>
    <Legend state={state} />
  </div>
));
