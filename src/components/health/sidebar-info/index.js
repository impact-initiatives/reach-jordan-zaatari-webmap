import React from 'react';
import radium from 'radium';
import { DESKTOP_WIDTH_MIN } from '../../../constants/browser.js';
import { DARK_GREY_50, WHITE } from '../../../constants/colors.js';
import styles from '../../../styles/index.js';
import { getWidthTransitionStyle } from '../../../styles/animations.js';
import Language from './language.js';
import About from './about';

export default radium(({ state }) => (
  <div style={{
    ...styles.flex.vertical.left,
    ...getWidthTransitionStyle({ visible: state.sidebarInfo.open }),
    backgroundColor: DARK_GREY_50,
    color: WHITE,
    height: '100%',
    position: 'absolute',
    right: '0px',
    width: document.body.clientWidth > DESKTOP_WIDTH_MIN ? '400px' : '75%',
    zIndex: '1',
  }}>
    <Language state={state} />
    <About state={state} />
  </div>
));
