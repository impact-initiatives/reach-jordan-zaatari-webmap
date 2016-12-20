import React from 'react';
import styles from '../../../styles/index.js';

export default ({ MESSAGES, onReset, state }) => (
  <div className={styles.flex.horizontalCenterY}>
    <div className={styles.component.title}>
      {MESSAGES.FILTER.TITLE[state.lang]}
    </div>
    <div className={styles.flex.itemSpace} />
    <div className={`${styles.component.buttonSmall} ${styles.inline.marginRight12}`}
         onClick={onReset}>
      {MESSAGES.FILTER.RESET[state.lang]}
    </div>
  </div>
);
