import React from 'react';
import messages from '../../../../translations/flood.js';
import styles from '../../../../styles/index.js';
import COLORS from '../../../../constants/colors.js';
import LegendItem from '../../../common/legend/legend-item.js';

export default ({ state }) => (
  <div className={styles.flex.verticalLeft}>
    <div className={styles.component.legendTitle}>
      {messages.legend.points[state.lang]}
    </div>
    <LegendItem color={COLORS.MEDIUM_BLUE}
                name={messages.legend.flood[state.lang]} />
    <LegendItem color={COLORS.LIGHT_BLUE}
                name={messages.legend.floodLight[state.lang]} />
    <LegendItem color={COLORS.ORANGE}
                name={messages.legend.mud[state.lang]} />
    <LegendItem color={COLORS.LIGHT_RED_100}
                name={messages.legend.noAccess[state.lang]} />
    <div className={styles.component.legendTitle}>
      {messages.legend.lines[state.lang]}
    </div>
    <LegendItem color={COLORS.MEDIUM_BLUE}
                name={messages.legend.flood[state.lang]} />
    <LegendItem color={COLORS.LIGHT_BLUE}
                name={messages.legend.floodLight[state.lang]} />
    <LegendItem color={COLORS.ORANGE}
                name={messages.legend.mud[state.lang]} />
    <LegendItem color={COLORS.LIGHT_RED_100}
                name={messages.legend.noAccess[state.lang]} />
  </div>
);
