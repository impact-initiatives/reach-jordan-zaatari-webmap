import React from 'react';
import radium from 'radium';
import { IMG } from '../../constants/resources.js';
import styles from '../../styles/index.js';
import colors from '../../styles/colors.js';

export default radium(() => (
  <div style={{
    ...styles.flex.horizontal.centerY,
    backgroundColor: colors.gray,
    color: colors.white,
    display: document.body.clientWidth > 992 ? 'flex' : 'none',
    height: '52px',
    width: '100%',
  }}>
    <img alt="unhcr-logo"
         src={IMG.LOGO_UNHCR}
         style={{ cursor: 'pointer', height: '40px', padding: '12px' }} />
    <div style={styles.flex.item.space} />
    <img alt="reach-logo"
         src={IMG.LOGO_REACH}
         style={{ cursor: 'pointer', height: '40px', padding: '12px' }} />
  </div>
));
