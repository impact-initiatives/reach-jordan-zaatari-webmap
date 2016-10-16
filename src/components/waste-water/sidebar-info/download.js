import React from 'react';
import radium from 'radium';
import IntlMessageFormat from 'intl-messageformat';
import styles from '../../../styles/index.js';
import MESSAGES from '../../../translations/waste-water.js';
import REACH from '../../../constants/reach.js';

function onClickCamp() {
  location.assign(REACH.WWN_CAMP);
}

function onClickDistrict() {
  location.assign(REACH.WWN_DISTRICT);
}

export default radium(({ state }) => (
  <div style={{
    ...styles.flex.horizontal.centerY,
    padding: '12px',
  }}>
    <div>
      {new IntlMessageFormat(MESSAGES.DOWNLOAD.HEADER[state.lang], state.lang).format()}
    </div>
    <div onClick={onClickCamp}
         style={{
           ...styles.button.small,
           margin: '0px 12px',
         }}>
      {new IntlMessageFormat(MESSAGES.DOWNLOAD.CAMP[state.lang], state.lang).format()}
    </div>
    <div onClick={onClickDistrict}
         style={styles.button.small}>
      {new IntlMessageFormat(MESSAGES.DOWNLOAD.DISTRICT[state.lang], state.lang).format()}
    </div>
  </div>
));
