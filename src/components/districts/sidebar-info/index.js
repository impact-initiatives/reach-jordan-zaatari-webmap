import React from 'react';
import styles from '../../../styles/index.js';
import * as language from '../../../constants/languages';
import messages from '../../../translations/districts.js';
import Language from '../../common/info/language.js';
import About from '../../common/info/about.js';

export default ({ state }) => (
  <div className={[
    styles.menu.sidebarDefault,
    state.lang === language.AR ? styles.menu.sidebarRightArabic : styles.menu.sidebarRightEnglish,
    state.sidebarInfo.open ? styles.menu.sidebarOpen : styles.menu.sidebarClosed,
  ].join(' ')}>
    <div>
      <Language state={state} />
      <About messages={messages.info}
             state={state} />
    </div>
  </div>
);
