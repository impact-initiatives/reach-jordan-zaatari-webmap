import React from 'react';
import styles from '../../../styles/index.js';
import * as language from '../../../constants/languages';
import Legend from './legend/index.js';

export default ({ state }) => (
  <div className={[
    styles.menu.sidebarDefault,
    state.lang === language.AR ? styles.menu.sidebarRightArabic : styles.menu.sidebarRightEnglish,
    state.sidebarLayers.open ? styles.menu.sidebarOpen : styles.menu.sidebarClosed,
  ].join(' ')}>
    <Legend state={state} />
  </div>
);
