import React from 'react';
import radium from 'radium';
import store from '../../../store/index.js';
import { IMG } from '../../../constants/resources.js';
import styles from '../../../styles/index.js';
import { DARK_GREY_100, WHITE } from '../../../constants/colors.js';

function onClickHome() {
  store.dispatch({ type: (prevState) => {
    const state = JSON.parse(JSON.stringify(prevState));
    state.sidebarLeft.open = !state.sidebarLeft.open;
    state.sidebarRight.open = false;
    return state;
  } });
}

function onClickMenu() {
  store.dispatch({ type: (prevState) => {
    const state = JSON.parse(JSON.stringify(prevState));
    state.sidebarLeft.open = false;
    state.sidebarRight.open = !state.sidebarRight.open;
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
         src={IMG.HOME_WHITE}
         style={{ cursor: 'pointer', padding: '12px' }} />
    <div>
      {'JORDAN - Al Za\'atari Refugee Camp Health Facilities'}
    </div>
    <div style={styles.flex.item.space} />
    <img alt="menu"
         onClick={onClickMenu}
         src={IMG.MENU_WHITE}
         style={{ cursor: 'pointer', padding: '12px' }} />
  </div>
));
