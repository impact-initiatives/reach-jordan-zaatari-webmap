import React from 'react';
import messages from '../../../../translations/waste-water.js';
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
      {messages.search.title[state.lang]}
    </div>
    <div className={styles.flex.itemSpace} />
    <div className={`${styles.component.buttonSmall} ${styles.inline.marginRight12}`}
         onClick={onReset}>
      {messages.search.reset[state.lang]}
    </div>
  </div>
);
