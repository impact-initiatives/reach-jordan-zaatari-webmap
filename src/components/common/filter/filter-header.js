import React from 'react';
import { css } from 'aphrodisiac';
import IntlMessageFormat from 'intl-messageformat';
import styles from '../../../styles/index.js';

export default ({ MESSAGES, onReset, state }) => (
  <div className={css(styles.flex.horizontal.centerY)}>
    <div className={css(styles.filter.title)}>
      {new IntlMessageFormat(MESSAGES.FILTER.TITLE[state.lang], state.lang).format()}
    </div>
    <div className={css(styles.flex.item.space)} />
    <div className={css(
           styles.button.small,
           styles.inline.marginRight12,
         )}
         onClick={onReset}>
      {new IntlMessageFormat(MESSAGES.FILTER.RESET[state.lang], state.lang).format()}
    </div>
  </div>
);
