import React from 'react';
import messages from '../../../../translations/waste-water.js';
import styles from '../../../../styles/index.js';
import COLORS from '../../../../constants/colors.js';
import LegendItem from '../../../common/legend/legend-item.js';
import LegendItemLine from '../../../common/legend/legend-item-line.js';

export default ({ state }) => (
  <div className={styles.flex.verticalLeft}>
    <div className={styles.component.legendTitle}>
      {messages.legend.title[state.lang]}
    </div>
    <LegendItem color={COLORS.MEDIUM_BLUE}
                name={messages.legend.eight[state.lang]} />
    <LegendItem color={COLORS.GREEN}
                name={messages.legend.four[state.lang]} />
    <LegendItem color={COLORS.LIGHT_RED_100}
                name={messages.legend.two[state.lang]} />
    <LegendItem color={COLORS.DARK_GREY_100}
                name={messages.legend.steelTanks[state.lang]} />
    <LegendItemLine color={COLORS.DARK_GREY_100}
                    name={messages.legend.pipesSeptic[state.lang]} />
  </div>
);
