import React from 'react';
import styles from '../../../styles/index.js';
import { ARABIC } from '../../../constants/language';
import Legend from './legend/index.js';

export default ({ state }) => (
  <div className={[
    styles.menu.sidebarDefault,
    state.lang === ARABIC ? styles.menu.sidebarRightArabic : styles.menu.sidebarRightEnglish,
    state.sidebarLayers.open ? styles.menu.sidebarOpen : styles.menu.sidebarClosed,
  ].join(' ')}>
    <Legend state={state} />
  </div>
);
