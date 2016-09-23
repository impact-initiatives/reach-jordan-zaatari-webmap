import React from 'react';
import radium from 'radium';
import styles from '../../../../styles/index.js';
import { LIGHT_RED_100, MEDIUM_BLUE, DARK_GREY_50 } from '../../../../constants/colors.js';
import LegendItem from './legend-item.js';

export default radium(() => (
  <div style={{ ...styles.flex.vertical.left }}>
    <div style={{ height: '6px' }} />
    <div style={{
      fontWeight: '600',
      padding: '6px 24px',
    }}>
      Legend
    </div>
    <LegendItem color={LIGHT_RED_100}
                name="Healthcare Facility" />
    <LegendItem color={MEDIUM_BLUE}
                name="Camp Facility w/ Health Services" />
    <LegendItem color={DARK_GREY_50}
                name="Camp Facility" />
  </div>
));
