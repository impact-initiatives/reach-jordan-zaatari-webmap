import React from 'react';
import MESSAGES from '../../../../translations/health.js';
import styles from '../../../../styles/index.js';
import COLORS from '../../../../constants/colors.js';
import LegendItem from '../../../common/legend/legend-item.js';

export default ({ state }) => (
  <div className={styles.flex.verticalLeft}>
    <div className={styles.component.legendTitle}>
      {MESSAGES.LEGEND.TITLE[state.lang]}
    </div>
    <LegendItem color={COLORS.LIGHT_RED_100}
                name={MESSAGES.LEGEND.HEALTHCARE[state.lang]} />
    <LegendItem color={COLORS.MEDIUM_BLUE}
                name={MESSAGES.LEGEND.CAMP_HEALTH[state.lang]} />
    <LegendItem color={COLORS.DARK_GREY_50}
                name={MESSAGES.LEGEND.CAMP[state.lang]} />
  </div>
);
