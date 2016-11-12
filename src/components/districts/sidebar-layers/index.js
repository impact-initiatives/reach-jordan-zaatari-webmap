import React from 'react';
import { css } from 'aphrodisiac';
import styles from '../../../styles/index.js';
import { ARABIC } from '../../../constants/language';
import Legend from './legend/index.js';

export default ({ state }) => (
  <div className={css(
         styles.sidebar.option.default,
         state.lang === ARABIC ? styles.sidebar.right.arabic : styles.sidebar.right.english,
         state.sidebarLayers.open ? styles.sidebar.option.open : styles.sidebar.option.closed,
       )}>
    <Legend state={state} />
  </div>
);
