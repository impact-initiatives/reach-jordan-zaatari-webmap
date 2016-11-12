import React from 'react';
import { css } from 'aphrodisiac';
import IntlMessageFormat from 'intl-messageformat';
import MESSAGES from '../../../../translations/waste-water.js';
import store from '../../../../store/index.js';
import styles from '../../../../styles/index.js';

function onChange({ target }) {
  const { value } = target;
  store.dispatch({ type: (state) => ({
    ...state,
    search: {
      ...state.search,
      wasteWater: value,
    },
  }) });
}

function onKeyUp({ keyCode, target }) {
  if (keyCode === 13) {
    target.blur();
    store.dispatch({ type: (state) => ({
      ...state,
      sidebarLayers: {
        ...state.sidebarLayers,
        open: false,
      },
    }) });
  }
}

export default ({ state }) => (
  <div className={css(styles.flex.vertical.left)}>
    <div className={css(styles.inline.height6)} />
    <input className={css(
             styles.flex.horizontal.centerY,
             styles.search.bar,
           )}
           onChange={onChange}
           onKeyUp={onKeyUp}
           placeholder={
             new IntlMessageFormat(MESSAGES.SEARCH.SEARCH_BAR[state.lang], state.lang).format()}
           value={state.search.wasteWater} />
  </div>
);
