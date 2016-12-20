import React from 'react';
import { IMG } from '../../../constants/resources.js';
import styles from '../../../styles/index.js';

export default ({ donorLogo }) => (
  <div className={[
    styles.flex.horizontalCenterY,
    styles.menu.toolbarDefault,
    styles.media.hiddenMobile,
  ].join(' ')}>
    <img alt="donor-logo"
       className={styles.menu.toolbarLogo}
       src={donorLogo} />
    <div className={styles.flex.itemSpace} />
    <img alt="reach-logo"
         className={styles.menu.toolbarLogo}
         src={IMG.LOGO_REACH} />
  </div>
);
