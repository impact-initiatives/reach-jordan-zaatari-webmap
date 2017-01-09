import React from 'react';
import MESSAGES from '../../../../translations/flood.js';
import styles from '../../../../styles/index.js';
import COLORS from '../../../../constants/colors.js';
import LegendItem from '../../../common/legend/legend-item.js';

export default ({ state }) => (
  <div className={styles.flex.verticalLeft}>
    <div className={styles.component.legendTitle}>
      {MESSAGES.LEGEND.POINTS[state.lang]}
    </div>
    <LegendItem color={COLORS.MEDIUM_BLUE}
                name={MESSAGES.LEGEND.FLOOD[state.lang]} />
    <LegendItem color={COLORS.LIGHT_BLUE}
                name={MESSAGES.LEGEND.FLOOD_LIGHT[state.lang]} />
    <LegendItem color={COLORS.ORANGE}
                name={MESSAGES.LEGEND.MUD[state.lang]} />
    <LegendItem color={COLORS.LIGHT_RED_100}
                name={MESSAGES.LEGEND.NO_ACCESS[state.lang]} />
    <div className={styles.component.legendTitle}>
      {MESSAGES.LEGEND.LINES[state.lang]}
    </div>
    <LegendItem color={COLORS.MEDIUM_BLUE}
                name={MESSAGES.LEGEND.FLOOD[state.lang]} />
    <LegendItem color={COLORS.LIGHT_BLUE}
                name={MESSAGES.LEGEND.FLOOD_LIGHT[state.lang]} />
    <LegendItem color={COLORS.ORANGE}
                name={MESSAGES.LEGEND.MUD[state.lang]} />
    <LegendItem color={COLORS.LIGHT_RED_100}
                name={MESSAGES.LEGEND.NO_ACCESS[state.lang]} />
  </div>
);
