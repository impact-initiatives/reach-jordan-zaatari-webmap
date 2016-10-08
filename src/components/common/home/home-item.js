import React from 'react';
import radium from 'radium';
import IntlMessageFormat from 'intl-messageformat';
import MESSAGES from '../../../translations/common.js';
import COLORS from '../../../constants/colors.js';
import styles from '../../../styles/index.js';

function onClick({ target }) {
  const { url } = target.dataset;
  location.assign(url);
}

export default radium(({ icon, name, state, url }) => (
  <div style={{ ...styles.flex.vertical.left }}>
    <div style={{ height: '6px' }} />
    <div data-url={url}
         onClick={onClick}
         style={{
           ...styles.flex.horizontal.centerY,
           backgroundColor: COLORS.DARK_GREY_100,
           cursor: 'pointer',
           height: '52px',
         }}>
      <img alt={url}
           data-url={url}
           src={icon}
           style={{ padding: '12px' }} />
      <div data-url={url}
           style={{
             color: location.hash.split('?')[0] === url ? COLORS.LIGHT_BLUE : COLORS.WHITE,
           }}>
        {new IntlMessageFormat(MESSAGES[name][state.lang], state.lang).format()}
      </div>
    </div>
  </div>
));
