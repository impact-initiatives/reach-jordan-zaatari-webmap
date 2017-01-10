import React from 'react';
import styles from '../../../styles/index.js';
import language from '../../../constants/language';
import Legend from './legend/index.js';
import Search from './search/index.js';
import Filter from './filter/index.js';

export default ({ state }) => (
  <div className={[
    styles.menu.sidebarDefault,
    state.lang === language.AR ? styles.menu.sidebarRightArabic : styles.menu.sidebarRightEnglish,
    state.sidebarLayers.open ? styles.menu.sidebarOpen : styles.menu.sidebarClosed,
  ].join(' ')}>
    <Legend state={state} />
    <div className={styles.component.separator} />
    <Search state={state} />
    <div className={styles.component.separator} />
    <Filter state={state} />
  </div>
);
