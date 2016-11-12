import React from 'react';
import { css } from 'aphrodisiac';
import styles from '../../../styles/index.js';
import { ARABIC } from '../../../constants/language';
import MESSAGES from '../../../translations/districts.js';
import Language from '../../common/info/language.js';
import About from '../../common/info/about.js';

export default ({ state }) => (
  <div className={css(
         styles.sidebar.option.default,
         state.lang === ARABIC ? styles.sidebar.right.arabic : styles.sidebar.right.english,
         state.sidebarInfo.open ? styles.sidebar.option.open : styles.sidebar.option.closed,
       )}>
    <Language state={state} />
    <About messages={MESSAGES.INFO}
           state={state} />
  </div>
);
