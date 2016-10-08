import React from 'react';
import radium from 'radium';
import IntlMessageFormat from 'intl-messageformat';
import MESSAGES from '../../../../translations/waste-water.js';
import store from '../../../../store/index.js';
import styles from '../../../../styles/index.js';
import getInitialState from '../../../../store/initial-state.js';

function onReset() {
  store.dispatch({ type: (prevState) => {
    const state = JSON.parse(JSON.stringify(prevState));
    state.filters.wasteWater = getInitialState().filters.wasteWater;
    return state;
  } });
}

export default radium(({ state }) => (
  <div style={styles.flex.horizontal.centerY}>
    <div style={{
      fontWeight: '600',
      padding: '6px 24px',
    }}>
      {new IntlMessageFormat(MESSAGES.FILTER.TITLE[state.lang], state.lang).format()}
    </div>
    <div onClick={onReset}
         style={styles.button.small}>
      {new IntlMessageFormat(MESSAGES.FILTER.RESET[state.lang], state.lang).format()}
    </div>
  </div>
));
