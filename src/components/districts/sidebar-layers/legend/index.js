import React from 'react';
import messages from '../../../../translations/districts.js';
import styles from '../../../../styles/index.js';
import COLORS from '../../../../constants/colors.js';
import LegendItem from '../../../common/legend/legend-item.js';

export default ({ state }) => (
  <div className={styles.flex.verticalLeft}>
    <div className={styles.component.legendTitle}>
      {messages.legend.title[state.lang]}
    </div>
    <LegendItem color={COLORS.MEDIUM_BLUE}
                name={messages.legend.acted[state.lang]} />
    <LegendItem color={COLORS.YELLOW}
                name={messages.legend.jen[state.lang]} />
    <LegendItem color={COLORS.GREEN}
                name={messages.legend.oxfam[state.lang]} />
  </div>
);
