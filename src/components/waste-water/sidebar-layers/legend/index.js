import React from 'react';
import MESSAGES from '../../../../translations/waste-water.js';
import styles from '../../../../styles/index.js';
import COLORS from '../../../../constants/colors.js';
import LegendItem from '../../../common/legend/legend-item.js';
import LegendItemLine from '../../../common/legend/legend-item-line.js';

export default ({ state }) => (
  <div className={styles.flex.verticalLeft}>
    <div className={styles.component.legendTitle}>
      {MESSAGES.LEGEND.TITLE[state.lang]}
    </div>
    <LegendItem color={COLORS.MEDIUM_BLUE}
                name={MESSAGES.LEGEND.EIGHT[state.lang]} />
    <LegendItem color={COLORS.GREEN}
                name={MESSAGES.LEGEND.FOUR[state.lang]} />
    <LegendItem color={COLORS.LIGHT_RED_100}
                name={MESSAGES.LEGEND.TWO[state.lang]} />
    <LegendItem color={COLORS.DARK_GREY_100}
                name={MESSAGES.LEGEND.STEEL_TANKS[state.lang]} />
    <LegendItemLine color={COLORS.DARK_GREY_100}
                    name={MESSAGES.LEGEND.PIPES[state.lang]} />
  </div>
);
