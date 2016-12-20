import React from 'react';
import styles from '../../../styles/index.js';

export default ({ name, color }) => (
  <div className={`${styles.flex.horizontalCenterY} ${styles.inline.height36}`}>
    <div className={styles.inline.padding12x24}>
      <div className={styles.component.legendItemLine}
           style={{ backgroundColor: color }} />
    </div>
    <div>
      {name}
    </div>
  </div>
);
