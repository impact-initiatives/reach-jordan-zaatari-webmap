import React from 'react';
import radium from 'radium';
import IntlMessageFormat from 'intl-messageformat';
import MESSAGES from '../../../messages/home.js';
import { DARK_GREY_100, LIGHT_BLUE, WHITE } from '../../../constants/colors.js';
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
           backgroundColor: DARK_GREY_100,
           cursor: 'pointer',
           height: '52px',
         }}>
      <img alt={url}
           data-url={url}
           src={icon}
           style={{ padding: '12px' }} />
      <div data-url={url}
           style={{
             color: location.hash.includes(url) ? LIGHT_BLUE : WHITE,
           }}>
        {new IntlMessageFormat(MESSAGES[name][state.lang], state.lang).format()}
      </div>
    </div>
  </div>
));
