import React from 'react';
import styles from '../../styles/index.js';
import Header from '../common/header/index.js';
import Footer from '../common/footer/index.js';
import SidebarHome from '../common/home/index.js';
import MapboxGL from '../common/mapbox-gl/index.js';
import SidebarLayers from './sidebar-layers/index.js';
import SidebarInfo from './sidebar-info/index.js';
import language from '../../constants/languages.js';
import img from '../../constants/images.js';
import messages from '../../translations/waste-water.js';
import initMap from '../../mapbox-gl/maps/waste-water.js';

export default ({ state }) => (
  <div className={`${styles.flex.verticalNormal} ${styles.inline.fontDefault}`}
       dir={state.lang === language.AR ? 'rtl' : 'ltr'}>
    <Header messages={messages}
            state={state} />
    <div className={styles.menu.content}>
      <SidebarHome state={state} />
      <SidebarInfo state={state} />
      <SidebarLayers state={state} />
      <MapboxGL initMap={initMap} />
    </div>
    <Footer donorLogo={img.LOGO_UNICEF} />
  </div>
);
