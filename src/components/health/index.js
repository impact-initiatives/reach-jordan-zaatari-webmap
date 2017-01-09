import React from 'react';
import styles from '../../styles/index.js';
import Header from '../common/header/index.js';
import Footer from '../common/footer/index.js';
import SidebarHome from '../common/home/index.js';
import MapboxGL from '../common/mapbox-gl/index.js';
import SidebarLayers from './sidebar-layers/index.js';
import SidebarInfo from './sidebar-info/index.js';
import { ARABIC } from '../../constants/language.js';
import { IMG } from '../../constants/resources.js';
import MESSAGES from '../../translations/health.js';
import initMap from '../../mapbox-gl/maps/health.js';

export default ({ state }) => (
  <div className={`${styles.flex.verticalNormal} ${styles.inline.fontDefault}`}
       dir={state.lang === ARABIC ? 'rtl' : 'ltr'}>
    <Header MESSAGES={MESSAGES}
            state={state} />
    <div className={styles.menu.content}>
      <SidebarHome state={state} />
      <SidebarInfo state={state} />
      <SidebarLayers state={state} />
      <MapboxGL initMap={initMap} />
    </div>
    <Footer donorLogo={IMG.LOGO_UNHCR} />
  </div>
);
