import React from 'react';
import { css } from 'aphrodisiac';
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

export default ({ state }) => (
  <div className={css(
         styles.flex.horizontal.centerY,
         styles.inline.padding12,
       )}>
    <div>
      {new IntlMessageFormat(MESSAGES.DOWNLOAD.HEADER[state.lang], state.lang).format()}
    </div>
    <div className={css(
           styles.button.small,
           styles.inline.margin0x12,
         )}
         onClick={onClickCamp}>
      {new IntlMessageFormat(MESSAGES.DOWNLOAD.CAMP[state.lang], state.lang).format()}
    </div>
    <div className={css(styles.button.small)}
         onClick={onClickDistrict}>
      {new IntlMessageFormat(MESSAGES.DOWNLOAD.DISTRICTS[state.lang], state.lang).format()}
    </div>
  </div>
);
