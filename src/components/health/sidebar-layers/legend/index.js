import React from 'react';
import radium from 'radium';
import IntlMessageFormat from 'intl-messageformat';
import MESSAGES from '../../../../messages/health.js';
import styles from '../../../../styles/index.js';
import { LIGHT_RED_100, MEDIUM_BLUE } from '../../../../constants/colors.js';
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
                  MESSAGES.LEGEND.HEALTHCARE[state.lang], state.lang).format()} />
    <LegendItem color={MEDIUM_BLUE}
                name={new IntlMessageFormat(
                  MESSAGES.LEGEND.CAMP[state.lang], state.lang).format()} />
  </div>
));
