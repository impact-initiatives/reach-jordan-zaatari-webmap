import React from 'react';
import MESSAGES from '../../../../translations/waste-water.js';
import store from '../../../../store/index.js';
import styles from '../../../../styles/index.js';
import getInitialState from '../../../../store/initial-state.js';

function onReset() {
  store.dispatch({ type: (state) => ({
    ...state,
    search: {
      ...state.search,
      wasteWater: getInitialState().search.wasteWater,
    },
  }) });
}

export default ({ state }) => (
  <div className={styles.flex.horizontalBaseline}>
    <div className={styles.form.searchTitle}>
      {MESSAGES.SEARCH.TITLE[state.lang]}
    </div>
    <div className={styles.flex.itemSpace} />
    <div className={`${styles.component.buttonSmall} ${styles.inline.marginRight12}`}
         onClick={onReset}>
      {MESSAGES.SEARCH.RESET[state.lang]}
    </div>
  </div>
);
