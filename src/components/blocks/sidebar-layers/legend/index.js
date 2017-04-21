import React from 'react';
import messages from '../../../../translations/blocks.js';
import styles from '../../../../styles/index.js';
import * as colors from '../../../../constants/colors.js';
import LegendItem from '../../../common/legend/legend-item.js';

export default ({ state }) => (
  <div>
    <div className={styles.flex.verticalLeft}>
      <div className={styles.component.legendTitle}>
        {messages.legend.title[state.lang]}
      </div>
      <LegendItem color={colors.DARK_GREY_50}
                  name={messages.legend.block[state.lang]} />
    </div>
  </div>
);
