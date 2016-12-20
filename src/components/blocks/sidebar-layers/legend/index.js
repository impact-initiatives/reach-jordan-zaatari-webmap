import React from 'react';
import MESSAGES from '../../../../translations/blocks.js';
import styles from '../../../../styles/index.js';
import COLORS from '../../../../constants/colors.js';
import LegendItem from '../../../common/legend/legend-item.js';

export default ({ state }) => (
  <div className={styles.flex.verticalLeft}>
    <div className={styles.component.legendTitle}>
      {MESSAGES.LEGEND.TITLE[state.lang]}
    </div>
    <LegendItem color={COLORS.DARK_GREY_50}
                name={MESSAGES.LEGEND.BLOCK[state.lang]} />
  </div>
);
