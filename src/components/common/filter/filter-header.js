import React from 'react';
import styles from '../../../styles/index.js';

export default ({ messages, onReset, state }) => (
  <div className={styles.flex.horizontalCenterY}>
    <div className={styles.component.title}>
      {messages.filter.title[state.lang]}
    </div>
    <div className={styles.flex.itemSpace} />
    <div className={`${styles.component.buttonSmall} ${styles.inline.marginRight12}`}
         onClick={onReset}>
      {messages.filter.reset[state.lang]}
    </div>
  </div>
);
