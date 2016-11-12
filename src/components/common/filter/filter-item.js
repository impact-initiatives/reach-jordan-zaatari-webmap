import React from 'react';
import { css } from 'aphrodisiac';
import IntlMessageFormat from 'intl-messageformat';
import styles from '../../../styles/index.js';

export default ({ icon, MESSAGES, name, onClick, route, state, type }) => (
  <div className={css(styles.flex.vertical.left)}>
    <div className={css(
           styles.flex.horizontal.centerY,
           styles.home.item,
           state.filters[route][type] ? styles.color.lightBlue : styles.color.white,
         )}
         data-type={type}
         onClick={onClick}>
      <div alt={type}
           className={css(styles.inline.margin0x12)}
           data-type={type}
           src={icon} />
      <div data-type={type}>
        {new IntlMessageFormat(MESSAGES.FILTER[name][state.lang], state.lang).format()}
      </div>
    </div>
  </div>
);
