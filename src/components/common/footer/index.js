import React from 'react';
import radium from 'radium';
import { isMobile } from '../../../constants/browser.js';
import { IMG } from '../../../constants/resources.js';
import styles from '../../../styles/index.js';
import COLORS from '../../../constants/colors.js';

export default radium(({ donorLogo }) => (
  <div style={{
    ...styles.flex.horizontal.centerY,
    backgroundColor: COLORS.DARK_GREY_100,
    color: COLORS.WHITE,
    display: isMobile() ? 'none' : 'flex',
    height: '48px',
    width: '100%',
  }}>
    <img alt="donor-logo"
         src={donorLogo}
         style={{ height: '36px', padding: '12px' }} />
    <div style={styles.flex.item.space} />
    <img alt="reach-logo"
         src={IMG.LOGO_REACH}
         style={{ height: '48px', padding: '12px' }} />
  </div>
));
