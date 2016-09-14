import React from 'react';
import radium from 'radium';
import styles from '../../styles/index.js';
import colors from '../../styles/colors.js';

export default radium(() => (
  <div style={{
    ...styles.flex.horizontal.centerY,
    backgroundColor: colors.gray,
    color: colors.white,
    height: '52px',
    width: '100%',
  }}>
    <div style={{ padding: '12px' }}>
      {'JORDAN - Al Za\'atari Refugee Camp Health Facilities'}
    </div>
  </div>
));
