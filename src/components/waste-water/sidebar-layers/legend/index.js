import React from 'react';
import { css } from 'aphrodisiac';
import IntlMessageFormat from 'intl-messageformat';
import MESSAGES from '../../../../translations/waste-water.js';
import styles from '../../../../styles/index.js';
import COLORS from '../../../../constants/colors.js';
import LegendItem from '../../../common/legend/legend-item.js';
import LegendItemLine from '../../../common/legend/legend-item-line.js';

export default ({ state }) => (
  <div className={css(styles.flex.vertical.left)}>
    <div className={css(styles.legend.title)}>
      {new IntlMessageFormat(MESSAGES.LEGEND.TITLE[state.lang], state.lang).format()}
    </div>
    <LegendItem color={COLORS.MEDIUM_BLUE}
                name={new IntlMessageFormat(
                  MESSAGES.LEGEND.EIGHT[state.lang], state.lang).format()} />
    <LegendItem color={COLORS.GREEN}
                name={new IntlMessageFormat(
                  MESSAGES.LEGEND.FOUR[state.lang], state.lang).format()} />
    <LegendItem color={COLORS.LIGHT_RED_100}
                name={new IntlMessageFormat(
                  MESSAGES.LEGEND.TWO[state.lang], state.lang).format()} />
    <LegendItem color={COLORS.DARK_GREY_100}
                name={new IntlMessageFormat(
                  MESSAGES.LEGEND.STEEL_TANKS[state.lang], state.lang).format()} />
    <LegendItemLine color={COLORS.DARK_GREY_100}
                    name={new IntlMessageFormat(
                          MESSAGES.LEGEND.PIPES[state.lang], state.lang).format()} />
  </div>
);
