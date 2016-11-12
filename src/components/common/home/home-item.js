import React from 'react';
import { css } from 'aphrodisiac';
import IntlMessageFormat from 'intl-messageformat';
import MESSAGES from '../../../translations/common.js';
import styles from '../../../styles/index.js';

function onClick({ target }) {
  const { url } = target.dataset;
  location.assign(url);
}

export default ({ icon, name, state, url }) => (
  <div className={css(styles.flex.vertical.left)}>
    <div className={css(
           styles.flex.horizontal.centerY,
           styles.home.item,
         )}
         data-url={url}
         onClick={onClick}>
      <img alt={url}
           className={css(styles.inline.padding12)}
           data-url={url}
           src={icon} />
      <div className={css(
             location.hash.split('?')[0] === url ? styles.color.lightBlue : styles.color.white,
           )}
           data-url={url}>
        {new IntlMessageFormat(MESSAGES[name][state.lang], state.lang).format()}
      </div>
    </div>
  </div>
);
