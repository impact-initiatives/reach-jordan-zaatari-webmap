import React from 'react';
import styles from '../../../styles/index.js';
import language from '../../../constants/languages';
import messages from '../../../translations/waste-water.js';
import Language from '../../common/info/language.js';
import About from '../../common/info/about.js';
// import Download from './download.js';

export default ({ state }) => (
  <div className={[
    styles.menu.sidebarDefault,
    state.lang === language.AR ? styles.menu.sidebarRightArabic : styles.menu.sidebarRightEnglish,
    state.sidebarInfo.open ? styles.menu.sidebarOpen : styles.menu.sidebarClosed,
  ].join(' ')}>
    <div>
      <Language state={state} />
      {/* <Download state={state} /> */}
      <About messages={messages.info}
             state={state} />
    </div>
  </div>
);
