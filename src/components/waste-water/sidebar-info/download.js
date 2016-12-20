import React from 'react';
import styles from '../../../styles/index.js';
import MESSAGES from '../../../translations/waste-water.js';
import REACH from '../../../constants/reach.js';

function onClickCamp() {
  location.herf = REACH.WWN_CAMP;
}

function onClickDistrict() {
  location.href = REACH.WWN_DISTRICT;
}

export default ({ state }) => (
  <div className={`${styles.flex.horizontalCenterY} ${styles.inline.padding12}`}>
    <div>
      {MESSAGES.DOWNLOAD.HEADER[state.lang]}
    </div>
    <div className={`${styles.component.buttonSmall} ${styles.inline.margin0x12}`}
         onClick={onClickCamp}>
      {MESSAGES.DOWNLOAD.CAMP[state.lang]}
    </div>
    <div className={styles.component.buttonSmall}
         onClick={onClickDistrict}>
      {MESSAGES.DOWNLOAD.DISTRICTS[state.lang]}
    </div>
  </div>
);
