import React from 'react';
import radium from 'radium';
import styles from '../../../../styles/index.js';
import { WHITE } from '../../../../constants/colors.js';

export default radium(({ name, color }) => (
  <div style={{
    ...styles.flex.horizontal.centerY,
    height: '36px',
  }}>
    <div style={{ padding: '12px 24px' }}>
      <div style={{
        backgroundColor: color,
        border: `1px solid ${WHITE}`,
        height: '18px',
        width: '27px',
      }} />
    </div>
    <div>
      {name}
    </div>
  </div>
));
