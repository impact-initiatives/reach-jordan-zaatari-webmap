import React from 'react';
import styles from '../../../styles/index.js';
import { ARABIC } from '../../../constants/language';
import { IMG } from '../../../constants/resources.js';
import HomeItem from './home-item.js';

export default ({ state }) => (
  <div className={[
    styles.menu.sidebarDefault,
    state.lang === ARABIC ? styles.menu.sidebarLeftArabic : styles.menu.sidebarLeftEnglish,
    state.sidebarHome.open ? styles.menu.sidebarOpen : styles.menu.sidebarClosed,
  ].join(' ')}>
    <HomeItem icon={IMG.HOME_WHITE}
              name="MORE"
              state={state}
              url="http://www.reachresourcecentre.info/jordan/advanced-search/33+36" />
    <HomeItem icon={IMG.CHECK_BOX_OUTLINE}
              name="DISTRICTS"
              state={state}
              url="#/districts" />
    <HomeItem icon={IMG.APPS_WHITE}
              name="BLOCKS"
              state={state}
              url="#/blocks" />
    <HomeItem icon={IMG.LOCAL_HOSPITAL_WHITE}
              name="HEALTH"
              state={state}
              url="#/health" />
    <HomeItem icon={IMG.LOCAL_DRINK_WHITE}
              name="WASTE_WATER"
              state={state}
              url="#/waste-water" />
  </div>
);
