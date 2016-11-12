import React from 'react';
import { css } from 'aphrodisiac';
import IntlMessageFormat from 'intl-messageformat';
import MESSAGES from '../../../../translations/blocks.js';
import styles from '../../../../styles/index.js';
import COLORS from '../../../../constants/colors.js';
import LegendItem from '../../../common/legend/legend-item.js';

export default ({ state }) => (
  <div className={css(styles.flex.vertical.left)}>
    <div className={css(styles.legend.title)}>
      {new IntlMessageFormat(MESSAGES.LEGEND.TITLE[state.lang], state.lang).format()}
    </div>
    <LegendItem color={COLORS.DARK_GREY_50}
                name={new IntlMessageFormat(
                  MESSAGES.LEGEND.BLOCK[state.lang], state.lang).format()} />
  </div>
);
