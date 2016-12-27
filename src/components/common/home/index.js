import React from 'react';
import styles from '../../../styles/index.js';
import { ARABIC } from '../../../constants/language';
import { IMG } from '../../../constants/resources.js';
import MESSAGES from '../../../translations/common.js';
import HomeItem from './home-item.js';

export default ({ state }) => (
  <div className={[
    styles.menu.sidebarDefault,
    state.lang === ARABIC ? styles.menu.sidebarLeftArabic : styles.menu.sidebarLeftEnglish,
    state.sidebarHome.open ? styles.menu.sidebarOpen : styles.menu.sidebarClosed,
  ].join(' ')}>
    <HomeItem icon={IMG.HOME}
              name={MESSAGES.MORE[state.lang]}
              url="http://www.reachresourcecentre.info/jordan/advanced-search/33+36" />
    <HomeItem icon={IMG.CHECK_BOX_OUTLINE}
              name={MESSAGES.DISTRICTS[state.lang]}
              url="#/districts" />
    <HomeItem icon={IMG.APPS}
              name={MESSAGES.BLOCKS[state.lang]}
              url="#/blocks" />
    <HomeItem icon={IMG.LOCAL_HOSPITAL}
              name={MESSAGES.HEALTH[state.lang]}
              url="#/health" />
    <HomeItem icon={IMG.LOCAL_DRINK}
              name={MESSAGES.WASTE_WATER[state.lang]}
              url="#/waste-water" />
    <HomeItem icon={IMG.CLOUD}
              name={MESSAGES.FLOOD[state.lang]}
              url="#/flood" />
  </div>
);
