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
    state.search.wasteWater = getInitialState().search.wasteWater;
    return state;
  } });
}

export default radium(({ state }) => (
  <div style={styles.flex.horizontal.centerY}>
    <div style={{
      fontWeight: '600',
      padding: '6px 24px',
    }}>
      {new IntlMessageFormat(MESSAGES.SEARCH.TITLE[state.lang], state.lang).format()}
    </div>
    <div style={styles.flex.item.space} />
    <div onClick={onReset}
         style={{
           ...styles.button.small,
           marginRight: '12px',
         }}>
      {new IntlMessageFormat(MESSAGES.SEARCH.RESET[state.lang], state.lang).format()}
    </div>
  </div>
));
