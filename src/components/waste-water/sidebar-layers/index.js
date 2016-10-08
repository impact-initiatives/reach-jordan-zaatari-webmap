import React from 'react';
import radium from 'radium';
import styles from '../../../styles/index.js';
import { getSidebarRightStyle } from '../../../styles/animations.js';
import Legend from './legend/index.js';
import Filter from './filter/index.js';

export default radium(({ state }) => (
  <div style={getSidebarRightStyle({
    lang: state.lang,
    visible: state.sidebarLayers.open,
  })}>
    <Legend state={state} />
    <div style={styles.sidebar.separator} />
    <Filter state={state} />
  </div>
));
