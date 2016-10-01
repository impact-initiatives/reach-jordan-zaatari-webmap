import React from 'react';
import radium from 'radium';
import IntlMessageFormat from 'intl-messageformat';
import MESSAGES from '../../../../messages/waste-water.js';
import styles from '../../../../styles/index.js';
import { LIGHT_RED_100, MEDIUM_BLUE, DARK_GREY_50 } from '../../../../constants/colors.js';
import LegendItem from './legend-item.js';

export default radium(({ state }) => (
  <div style={{ ...styles.flex.vertical.left }}>
    <div style={{ height: '6px' }} />
    <div style={{
      fontWeight: '600',
      padding: '6px 24px',
    }}>
      {new IntlMessageFormat(MESSAGES.LEGEND.TITLE[state.lang], state.lang).format()}
    </div>
    <LegendItem color={LIGHT_RED_100}
                name={new IntlMessageFormat(
                  MESSAGES.LEGEND.EIGHT[state.lang], state.lang).format()} />
    <LegendItem color={MEDIUM_BLUE}
                name={new IntlMessageFormat(
                  MESSAGES.LEGEND.FOUR[state.lang], state.lang).format()} />
    <LegendItem color={DARK_GREY_50}
                name={new IntlMessageFormat(
                  MESSAGES.LEGEND.TWO[state.lang], state.lang).format()} />
  </div>
));
