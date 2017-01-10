import React from 'react';
import messages from '../../../../translations/waste-water.js';
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
  <div className={styles.flex.verticalLeft}>
    <div className={styles.inline.height6} />
    <input className={styles.form.searchBar}
           onChange={onChange}
           onKeyUp={onKeyUp}
           placeholder={messages.search.searchBar[state.lang]}
           value={state.search.wasteWater} />
  </div>
);
