import React from 'react';
import radium from 'radium';
import IntlMessageFormat from 'intl-messageformat';
import MESSAGES from '../../../messages/health.js';
import styles from '../../../styles/index.js';

export default radium(({ state }) => (
  <div>
    <div style={{
      ...styles.flex.horizontal.centerY,
      padding: '12px',
    }}>
      {new IntlMessageFormat(MESSAGES.INFO.CREATED[state.lang], state.lang).format()}
    </div>
    <div style={{
      ...styles.flex.horizontal.centerY,
      padding: '12px',
    }}>
      {new IntlMessageFormat(MESSAGES.INFO.COLLECTED[state.lang], state.lang).format()}
    </div>
    <div style={{
      ...styles.flex.horizontal.centerY,
      padding: '12px',
    }}>
      {new IntlMessageFormat(MESSAGES.INFO.ACCURACY[state.lang], state.lang).format()}
    </div>
  </div>
));
