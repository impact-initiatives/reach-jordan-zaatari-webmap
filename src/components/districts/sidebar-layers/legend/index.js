import React from 'react';
import { css } from 'aphrodisiac';
import IntlMessageFormat from 'intl-messageformat';
import MESSAGES from '../../../../translations/districts.js';
import styles from '../../../../styles/index.js';
import COLORS from '../../../../constants/colors.js';
import LegendItem from '../../../common/legend/legend-item.js';

export default ({ state }) => (
  <div className={css(styles.flex.vertical.left)}>
    <div className={css(styles.legend.title)}>
      {new IntlMessageFormat(MESSAGES.LEGEND.TITLE[state.lang], state.lang).format()}
    </div>
    <LegendItem color={COLORS.MEDIUM_BLUE}
                name={new IntlMessageFormat(
                  MESSAGES.LEGEND.ACTED[state.lang], state.lang).format()} />
    <LegendItem color={COLORS.YELLOW}
                name={new IntlMessageFormat(
                  MESSAGES.LEGEND.JEN[state.lang], state.lang).format()} />
    <LegendItem color={COLORS.GREEN}
                name={new IntlMessageFormat(
                  MESSAGES.LEGEND.OXFAM[state.lang], state.lang).format()} />
  </div>
);
