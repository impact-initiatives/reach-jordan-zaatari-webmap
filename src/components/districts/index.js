import React from 'react';
import { css } from 'aphrodisiac';
import styles from '../../styles/index.js';
import Header from '../common/header/index.js';
import Footer from '../common/footer/index.js';
import SidebarHome from '../common/home/index.js';
import MapboxGL from '../common/mapbox-gl/index.js';
import SidebarLayers from './sidebar-layers/index.js';
import SidebarInfo from './sidebar-info/index.js';
import { ARABIC } from '../../constants/language.js';
import { IMG } from '../../constants/resources.js';
import MESSAGES from '../../translations/districts.js';
import initMap from '../../mapbox-gl/maps/districts/index.js';

export default ({ state }) => (
  <div className={css(
         styles.flex.vertical.normal,
         styles.font.default,
       )}
       dir={state.lang === ARABIC ? 'rtl' : 'ltr'}>
    <Header MESSAGES={MESSAGES}
            state={state} />
    <div className={css(
           styles.flex.vertical.left,
           styles.flex.item.space,
           styles.inline.positionRelative,
           styles.inline.width100,
         )}>
      <SidebarHome state={state} />
      <SidebarInfo state={state} />
      <SidebarLayers state={state} />
      <MapboxGL initMap={initMap} />
    </div>
    <Footer donorLogo={IMG.LOGO_UNHCR} />
  </div>
);
