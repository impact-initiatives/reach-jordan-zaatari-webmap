import React from 'react';
import radium from 'radium';
import { DESKTOP_WIDTH_MIN } from '../../constants/browser.js';
import { DARK_GREY_50, WHITE } from '../../constants/colors.js';
import { getWidthTransitionStyle } from '../../styles/animations.js';

export default radium(({ state }) => (
  <div style={{
    ...getWidthTransitionStyle({ visible: state.sidebarLeft.open }),
    backgroundColor: DARK_GREY_50,
    color: WHITE,
    height: '100%',
    position: 'absolute',
    left: '0px',
    width: document.body.clientWidth > DESKTOP_WIDTH_MIN ? '500px' : '100%',
    zIndex: 1,
  }}>
    Width: {document.body.clientWidth > DESKTOP_WIDTH_MIN ? '500px' : '100%'}
  </div>
));
