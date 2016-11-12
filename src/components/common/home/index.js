import React from 'react';
import { css } from 'aphrodisiac';
import styles from '../../../styles/index.js';
import { ARABIC } from '../../../constants/language';
import { IMG } from '../../../constants/resources.js';
import HomeItem from './home-item.js';

export default ({ state }) => (
  <div className={css(
         styles.sidebar.option.default,
         state.lang === ARABIC ? styles.sidebar.left.arabic : styles.sidebar.left.english,
         state.sidebarHome.open ? styles.sidebar.option.open : styles.sidebar.option.closed,
       )}>
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
