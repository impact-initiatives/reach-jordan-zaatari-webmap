import React from 'react';
import { css } from 'aphrodisiac';
import styles from '../../../styles/index.js';

export default ({ name, color }) => (
  <div className={css(
         styles.flex.horizontal.centerY,
         styles.inline.height36,
       )}>
    <div className={css(styles.inline.padding12x24)}>
      <div className={css(styles.legend.item)}
           style={{ backgroundColor: color }} />
    </div>
    <div>
      {name}
    </div>
  </div>
);
