import React from 'react';
import store from '../../../store/index.js';
import { IMG } from '../../../constants/resources.js';
import styles from '../../../styles/index.js';
import COMMON_MESSAGES from '../../../translations/common.js';

function onClickHome() {
  store.dispatch({ type: (state) => ({
    ...state,
    sidebarHome: {
      ...state.sidebarHome,
      open: !state.sidebarHome.open,
    },
    sidebarLayers: {
      ...state.sidebarLayers,
      open: false,
    },
    sidebarInfo: {
      ...state.sidebarInfo,
      open: false,
    },
  }) });
}

function onClickInfo() {
  store.dispatch({ type: (state) => ({
    ...state,
    sidebarHome: {
      ...state.sidebarHome,
      open: false,
    },
    sidebarLayers: {
      ...state.sidebarLayers,
      open: false,
    },
    sidebarInfo: {
      ...state.sidebarInfo,
      open: !state.sidebarInfo.open,
    },
  }) });
}

function onClickLayers() {
  store.dispatch({ type: (state) => ({
    ...state,
    sidebarHome: {
      ...state.sidebarHome,
      open: false,
    },
    sidebarLayers: {
      ...state.sidebarLayers,
      open: !state.sidebarLayers.open,
    },
    sidebarInfo: {
      ...state.sidebarInfo,
      open: false,
    },
  }) });
}

export default ({ state, MESSAGES }) => (
  <div className={`${styles.flex.horizontalCenterY} ${styles.menu.toolbarDefault}`}>
    <img alt="home"
         className={styles.menu.toolbarImage}
         onClick={onClickHome}
         src={IMG.MENU_WHITE} />
    <div className={styles.media.hiddenMobile}>
      {COMMON_MESSAGES.TITLE_LONG[state.lang]}
    </div>
    <div className={styles.media.hiddenDesktop}>
      {COMMON_MESSAGES.TITLE_SHORT[state.lang]}
    </div>
    <div>&nbsp;-&nbsp;</div>
    <div className={styles.media.hiddenMobile}>
      {MESSAGES.TITLE_LONG[state.lang]}
    </div>
    <div className={styles.media.hiddenDesktop}>
      {MESSAGES.TITLE_SHORT[state.lang]}
    </div>
    <div className={styles.flex.itemSpace} />
    <img alt="info"
         className={styles.menu.toolbarImage}
         onClick={onClickInfo}
         src={IMG.INFO_WHITE} />
    <img alt="layers"
         className={styles.menu.toolbarImage}
         onClick={onClickLayers}
         src={IMG.LAYERS_WHITE} />
  </div>
);
