import React from 'react';
import styles from '../../../styles/index.js';
import language from '../../../constants/languages';
import img from '../../../constants/images.js';
import messages from '../../../translations/common.js';
import HomeItem from './home-item.js';

export default ({ state }) => (
  <div className={[
    styles.menu.sidebarDefault,
    state.lang === language.AR ? styles.menu.sidebarLeftArabic : styles.menu.sidebarLeftEnglish,
    state.sidebarHome.open ? styles.menu.sidebarOpen : styles.menu.sidebarClosed,
  ].join(' ')}>
    <HomeItem icon={img.HOME}
              name={messages.more[state.lang]}
              url="https://github.com/impact-initiatives/reach-jor-zaatari-data" />
    <HomeItem icon={img.CHECK_BOX_OUTLINE}
              name={messages.districts[state.lang]}
              url="#/districts" />
    <HomeItem icon={img.APPS}
              name={messages.blocks[state.lang]}
              url="#/blocks" />
    {/* <HomeItem icon={img.LOCAL_HOSPITAL}
              name={messages.health[state.lang]}
              url="#/health" /> */}
    <HomeItem icon={img.LOCAL_DRINK}
              name={messages.wasteWater[state.lang]}
              url="#/waste-water" />
  </div>
);
