import React from 'react';
import radium from 'radium';
import { getSidebarRightStyle } from '../../../styles/animations.js';
import MESSAGES from '../../../translations/waste-water.js';
import Language from '../../common/info/language.js';
import About from '../../common/info/about.js';
import Download from './download.js';

export default radium(({ state }) => (
  <div style={getSidebarRightStyle({
    lang: state.lang,
    visible: state.sidebarInfo.open,
  })}>
    <Language state={state} />
    <Download state={state} />
    <About messages={MESSAGES.INFO}
           state={state} />
  </div>
));
