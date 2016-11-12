import React from 'react';
import { css } from 'aphrodisiac';
import IntlMessageFormat from 'intl-messageformat';
import styles from '../../../styles/index.js';
import MESSAGES from '../../../translations/common.js';

export default ({ messages, state }) => (
  <div>
    {messages.map((message, index) => (
      <div className={css(styles.inline.padding12)}
           key={index}>
        {new IntlMessageFormat(message[state.lang], state.lang).format()}
      </div>
    ))}
    <div className={css(styles.inline.padding12)}>
      {new IntlMessageFormat(MESSAGES.INFO.CURRENCY[state.lang], state.lang).format()}
    </div>
    <div className={css(styles.inline.padding12)}>
      {new IntlMessageFormat(MESSAGES.INFO.CONTACT[state.lang], state.lang).format()}
      <a className={css(styles.color.link)}
         href="mailto:jordan.mapping@reach-initiative.org">
        jordan.mapping@reach-initiative.org
      </a>
    </div>
  </div>
);
