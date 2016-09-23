import React from 'react';
import radium from 'radium';
import { DESKTOP_WIDTH_MIN } from '../../../constants/browser.js';
import { DARK_GREY_50, WHITE } from '../../../constants/colors.js';
import styles from '../../../styles/index.js';
import { getWidthTransitionStyle } from '../../../styles/animations.js';

export default radium(({ state }) => (
  <div style={{
    ...getWidthTransitionStyle({ visible: state.sidebarInfo.open }),
    backgroundColor: DARK_GREY_50,
    color: WHITE,
    height: '100%',
    position: 'absolute',
    right: '0px',
    width: document.body.clientWidth > DESKTOP_WIDTH_MIN ? '400px' : '75%',
    zIndex: '1',
  }}>
    <div style={{ ...styles.flex.vertical.left }}>
      <div style={{
        ...styles.flex.horizontal.centerY,
        padding: '12px',
      }}>
        This map was created in collaboration with UNHCR to provide humanitarian actors and medical
        professionals with a way to access information about the health services offered in
        Za'atari. All information correct as of October 2016.
      </div>
      <div style={{
        ...styles.flex.horizontal.centerY,
        padding: '12px',
      }}>
        Health service information was collated by UNHCR, and spatial data was collected by REACH
        and UNHCR.
      </div>
    </div>
  </div>
));
