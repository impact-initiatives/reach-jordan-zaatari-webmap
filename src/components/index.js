import React from 'react';
import radium from 'radium';
import styles from '../styles/index.js';
import Header from './header/index.js';
import MapboxGL from './mapbox-gl/index.js';

export default radium(({ state }) => (
  <div style={{
    ...styles.flex.vertical.center,
    height: '100%',
    fontFamily: styles.font.default,
  }}>
    <Header state={state} />
    <MapboxGL state={state} />
  </div>
));
