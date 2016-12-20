import React from 'react';
import MESSAGES from '../../../../translations/districts.js';
import styles from '../../../../styles/index.js';
import COLORS from '../../../../constants/colors.js';
import LegendItem from '../../../common/legend/legend-item.js';

export default ({ state }) => (
  <div className={styles.flex.verticalLeft}>
    <div className={styles.component.legendTitle}>
      {MESSAGES.LEGEND.TITLE[state.lang]}
    </div>
    <LegendItem color={COLORS.MEDIUM_BLUE}
                name={MESSAGES.LEGEND.ACTED[state.lang]} />
    <LegendItem color={COLORS.YELLOW}
                name={MESSAGES.LEGEND.JEN[state.lang]} />
    <LegendItem color={COLORS.GREEN}
                name={MESSAGES.LEGEND.OXFAM[state.lang]} />
  </div>
);
