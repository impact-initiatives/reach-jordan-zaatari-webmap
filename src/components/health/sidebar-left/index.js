import React from 'react';
import radium from 'radium';
import { DESKTOP_WIDTH_MIN } from '../../../constants/browser.js';
import { DARK_GREY_100, DARK_GREY_50, WHITE } from '../../../constants/colors.js';
import styles from '../../../styles/index.js';
import { getWidthTransitionStyle } from '../../../styles/animations.js';

function onClick() {
  location.assign('https://reach.maxmalynowsky.com');
}

export default radium(({ state }) => (
  <div style={{
    ...getWidthTransitionStyle({ visible: state.sidebarLeft.open }),
    backgroundColor: DARK_GREY_50,
    color: WHITE,
    height: '100%',
    position: 'absolute',
    left: '0px',
    width: document.body.clientWidth > DESKTOP_WIDTH_MIN ? '400px' : '75%',
    zIndex: '1',
  }}>
    <div style={{ ...styles.flex.vertical.left }}>
      <div style={{
        backgroundColor: DARK_GREY_50,
        height: '6px',
      }} />
      <div style={{
        ...styles.flex.horizontal.centerY,
        backgroundColor: DARK_GREY_100,
        cursor: 'pointer',
        height: '52px',
      }}>
        <div style={{ padding: '12px' }} />
        <div onClick={onClick}>
          More Maps
        </div>
      </div>
    </div>
  </div>
));
