import React from 'react';
import styles from '../../../styles/index.js';
import MESSAGES from '../../../translations/common.js';

export default ({ messages, state }) => (
  <div>
    {messages.map((message) => (
      <div className={styles.inline.padding12}
           key={message[state.lang]}>
        {message[state.lang]}
      </div>
    ))}
    <div className={styles.inline.padding12}>
      {MESSAGES.INFO.CURRENCY[state.lang]}
    </div>
    <div className={styles.inline.padding12}>
      {MESSAGES.INFO.CONTACT[state.lang]}
      <a className={styles.inline.colorLink}
         href="mailto:jordan.mapping@reach-initiative.org">
        jordan.mapping@reach-initiative.org
      </a>
    </div>
  </div>
);
