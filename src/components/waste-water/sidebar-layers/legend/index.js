import React from 'react';
import messages from '../../../../translations/waste-water.js';
import styles from '../../../../styles/index.js';
import * as colors from '../../../../constants/colors.js';
import LegendItem from '../../../common/legend/legend-item.js';
import LegendItemLine from '../../../common/legend/legend-item-line.js';

export default ({ state }) => (
  <div>
    <div className={styles.flex.verticalLeft}>
      <div className={styles.component.legendTitle}>
        {messages.legend.title[state.lang]}
      </div>
      <LegendItem color={colors.MEDIUM_BLUE}
                  name={messages.legend.eight[state.lang]} />
      <LegendItem color={colors.GREEN}
                  name={messages.legend.four[state.lang]} />
      <LegendItem color={colors.LIGHT_RED_100}
                  name={messages.legend.two[state.lang]} />
      <LegendItem color={colors.DARK_GREY_100}
                  name={messages.legend.steelTanks[state.lang]} />
      <LegendItem color={colors.DARK_GREY_50}
                  name={messages.legend.steelTanksUnconnected[state.lang]} />
      <LegendItemLine color={colors.DARK_GREY_100}
                      name={messages.legend.pipes[state.lang]} />
    </div>
  </div>
);
