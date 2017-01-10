import React from 'react';
import styles from '../../../styles/index.js';
import language from '../../../constants/language';
import { IMG } from '../../../constants/resources.js';
import messages from '../../../translations/common.js';
import HomeItem from './home-item.js';

export default ({ state }) => (
  <div className={[
    styles.menu.sidebarDefault,
    state.lang === language.AR ? styles.menu.sidebarLeftArabic : styles.menu.sidebarLeftEnglish,
    state.sidebarHome.open ? styles.menu.sidebarOpen : styles.menu.sidebarClosed,
  ].join(' ')}>
    <HomeItem icon={IMG.HOME}
              name={messages.more[state.lang]}
              url="http://www.reachresourcecentre.info/jordan/advanced-search/33+36" />
    <HomeItem icon={IMG.CHECK_BOX_OUTLINE}
              name={messages.districts[state.lang]}
              url="#/districts" />
    <HomeItem icon={IMG.APPS}
              name={messages.blocks[state.lang]}
              url="#/blocks" />
    <HomeItem icon={IMG.LOCAL_HOSPITAL}
              name={messages.health[state.lang]}
              url="#/health" />
    <HomeItem icon={IMG.LOCAL_DRINK}
              name={messages.wasteWater[state.lang]}
              url="#/waste-water" />
    <HomeItem icon={IMG.CLOUD}
              name={messages.flood[state.lang]}
              url="#/flood" />
  </div>
);
