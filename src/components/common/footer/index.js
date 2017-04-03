import React from 'react';
import img from '../../../constants/images.js';
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
         src={img.LOGO_REACH} />
  </div>
);
