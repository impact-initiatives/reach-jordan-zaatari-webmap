import React from 'react';
import radium from 'radium';
import { getSidebarRightStyle } from '../../../styles/animations.js';
import Language from './language.js';
import About from './about';

export default radium(({ state }) => (
  <div style={getSidebarRightStyle({
    lang: state.lang,
    visible: state.sidebarInfo.open,
  })}>
    <Language state={state} />
    <About state={state} />
  </div>
));
