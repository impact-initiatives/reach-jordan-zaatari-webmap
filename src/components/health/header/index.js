import React from 'react';
import radium from 'radium';
import store from '../../../store/index.js';
import { IMG } from '../../../constants/resources.js';
import styles from '../../../styles/index.js';
import { DARK_GREY_100, WHITE } from '../../../constants/colors.js';

function onClickHome() {
  store.dispatch({ type: (prevState) => {
    const state = JSON.parse(JSON.stringify(prevState));
    state.sidebarHome.open = !state.sidebarHome.open;
    state.sidebarInfo.open = false;
    state.sidebarLayers.open = false;
    return state;
  } });
}

function onClickInfo() {
  store.dispatch({ type: (prevState) => {
    const state = JSON.parse(JSON.stringify(prevState));
    state.sidebarHome.open = false;
    state.sidebarInfo.open = !state.sidebarInfo.open;
    state.sidebarLayers.open = false;
    return state;
  } });
}

function onClickLayers() {
  store.dispatch({ type: (prevState) => {
    const state = JSON.parse(JSON.stringify(prevState));
    state.sidebarHome.open = false;
    state.sidebarInfo.open = false;
    state.sidebarLayers.open = !state.sidebarLayers.open;
    return state;
  } });
}

export default radium(() => (
  <div style={{
    ...styles.flex.horizontal.centerY,
    backgroundColor: DARK_GREY_100,
    color: WHITE,
    height: '52px',
    width: '100%',
  }}>
    <img alt="home"
         onClick={onClickHome}
         src={IMG.APPS_WHITE}
         style={{ cursor: 'pointer', padding: '12px' }} />
    <div>
      {'Al Za\'atari Refugee Camp - Health Facilities'}
    </div>
    <div style={styles.flex.item.space} />
    <img alt="info"
         onClick={onClickInfo}
         src={IMG.INFO_WHITE}
         style={{ cursor: 'pointer', padding: '12px' }} />
    <img alt="layers"
         onClick={onClickLayers}
         src={IMG.LAYERS_WHITE}
         style={{ cursor: 'pointer', padding: '12px' }} />
  </div>
));
