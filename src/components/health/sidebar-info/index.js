import React from 'react';
import styles from '../../../styles/index.js';
import language from '../../../constants/language';
import MESSAGES from '../../../translations/health.js';
import Language from '../../common/info/language.js';
import About from '../../common/info/about.js';

export default ({ state }) => (
  <div className={[
    styles.menu.sidebarDefault,
    state.lang === language.AR ? styles.menu.sidebarRightArabic : styles.menu.sidebarRightEnglish,
    state.sidebarInfo.open ? styles.menu.sidebarOpen : styles.menu.sidebarClosed,
  ].join(' ')}>
    <Language state={state} />
    <About messages={MESSAGES.INFO}
           state={state} />
  </div>
);
