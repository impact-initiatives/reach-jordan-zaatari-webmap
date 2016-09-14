import React from 'react';
import radium from 'radium';
import store from '../../store/index.js';
import styles from '../../styles/index.js';
import colors from '../../styles/colors.js';

function onClickMenu() {
  store.dispatch({ type: (prevState) => {
    const state = JSON.parse(JSON.stringify(prevState));
    state.menuBar.open = !state.menuBar.open;
    return state;
  } });
}

export default radium(({ state }) => (
  <div style={{
    ...styles.flex.horizontal.centerY,
    backgroundColor: colors.gray,
    color: colors.white,
    height: '52px',
    width: '100%',
  }}>
    <img alt="home"
         src="../../../img/ic_home_white_24px.svg"
         style={{ cursor: 'pointer', padding: '12px' }} />
    <div>
      {'JORDAN - Al Za\'atari Refugee Camp Health Facilities'}
    </div>
    <div style={styles.flex.item.space} />
    <img alt="menu"
         onClick={onClickMenu}
         src="../../../img/ic_menu_white_24px.svg"
         style={{ cursor: 'pointer', padding: '12px' }} />
  </div>
));
