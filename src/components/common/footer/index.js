import React from 'react';
import radium from 'radium';
import { isMobile } from '../../../constants/browser.js';
import { IMG } from '../../../constants/resources.js';
import styles from '../../../styles/index.js';
import { DARK_GREY_100, WHITE } from '../../../constants/colors.js';

export default radium(({ donorLogo }) => (
  <div style={{
    ...styles.flex.horizontal.centerY,
    backgroundColor: DARK_GREY_100,
    color: WHITE,
    display: isMobile() ? 'none' : 'flex',
    height: '52px',
    width: '100%',
  }}>
    <img alt="unhcr-logo"
         src={donorLogo}
         style={{ cursor: 'pointer', height: '40px', padding: '12px' }} />
    <div style={styles.flex.item.space} />
    <img alt="reach-logo"
         src={IMG.LOGO_REACH}
         style={{ cursor: 'pointer', height: '40px', padding: '12px' }} />
  </div>
));
