import React from 'react';
import radium from 'radium';
import { DARK_GREY_100, DARK_GREY_50 } from '../../constants/colors.js';
import styles from '../../styles/index.js';

export default radium(({ icon, index, name }) => (
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
      <div style={{ padding: '12px' }}>

      </div>
      <div>
        {name}
      </div>
    </div>
  </div>
));
