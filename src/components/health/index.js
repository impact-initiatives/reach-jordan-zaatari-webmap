import React from 'react';
import radium from 'radium';
import styles from '../../styles/index.js';
import Header from './header/index.js';
import Footer from './footer/index.js';
import SidebarLeft from './sidebar-left/index.js';
import SidebarRight from './sidebar-right/index.js';
import MapboxGL from './mapbox-gl/index.js';

export default radium(({ state }) => (
  <div style={{
    ...styles.flex.vertical.normal,
    fontFamily: styles.font.default,
  }}>
    <Header state={state} />
    <div style={{
      ...styles.flex.vertical.left,
      ...styles.flex.item.space,
      position: 'relative',
      width: '100%',
    }}>
      <SidebarLeft state={state} />
      <MapboxGL state={state} />
      <SidebarRight state={state} />
    </div>
    <Footer state={state} />
  </div>
));
