import React from 'react';
import { css } from 'aphrodisiac';
import IntlMessageFormat from 'intl-messageformat';
import MESSAGES from '../../../../translations/waste-water.js';
import store from '../../../../store/index.js';
import styles from '../../../../styles/index.js';
import getInitialState from '../../../../store/initial-state.js';

function onReset() {
  store.dispatch({ type: (state) => ({
    ...state,
    search: {
      ...state.search,
      wasteWater: getInitialState().search.wasteWater,
    },
  }) });
}

export default ({ state }) => (
  <div className={css(styles.flex.horizontal.centerY)}>
    <div className={css(styles.search.title)}>
      {new IntlMessageFormat(MESSAGES.SEARCH.TITLE[state.lang], state.lang).format()}
    </div>
    <div className={css(styles.flex.item.space)} />
    <div className={css(
           styles.button.small,
           styles.inline.marginRight12,
         )}
         onClick={onReset}>
      {new IntlMessageFormat(MESSAGES.SEARCH.RESET[state.lang], state.lang).format()}
    </div>
  </div>
);
