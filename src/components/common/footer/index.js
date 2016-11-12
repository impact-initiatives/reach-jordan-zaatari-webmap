import React from 'react';
import { css } from 'aphrodisiac';
import { IMG } from '../../../constants/resources.js';
import styles from '../../../styles/index.js';

export default ({ donorLogo }) => (
  <div className={css(styles.hiddenOn.mobile)}>
    <div className={css(
      styles.flex.horizontal.centerY,
      styles.toolbar.default,
    )}>
      <img alt="donor-logo"
           className={css(
             styles.inline.height36,
             styles.inline.padding12,
           )}
           src={donorLogo} />
      <div className={css(styles.flex.item.space)} />
      <img alt="reach-logo"
           className={css(
             styles.inline.height48,
             styles.inline.padding12,
           )}
           src={IMG.LOGO_REACH} />
    </div>
  </div>
);
