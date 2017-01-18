import React from 'react';
import styles from '../../../styles/index.js';
import messages from '../../../translations/waste-water.js';
import REACH from '../../../constants/reach.js';

function onClickCamp() {
  location.assign(REACH.WWN_CAMP);
}

function onClickDistrict() {
  location.assign(REACH.WWN_DISTRICT);
}

export default ({ state }) => (
  <div className={`${styles.flex.horizontalCenterY} ${styles.inline.padding12}`}>
    <div>
      {messages.download.header[state.lang]}
    </div>
    <div className={`${styles.component.buttonSmall} ${styles.inline.margin0x12}`}
         onClick={onClickCamp}>
      {messages.download.camp[state.lang]}
    </div>
    <div className={styles.component.buttonSmall}
         onClick={onClickDistrict}>
      {messages.download.districts[state.lang]}
    </div>
  </div>
);
