import React from 'react';
import store from '../../../store/index.js';
import img from '../../../constants/images.js';
import styles from '../../../styles/index.js';
import commonMessages from '../../../translations/common.js';

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

export default ({ state, messages }) => (
  <div className={`${styles.flex.horizontalCenterY} ${styles.menu.toolbarDefault}`}>
    <img alt="home"
         className={styles.menu.toolbarImage}
         onClick={onClickHome}
         src={img.MENU} />
    <div className={styles.media.hiddenMobile}>
      {commonMessages.titleLong[state.lang]}
    </div>
    <div className={styles.media.hiddenDesktop}>
      {commonMessages.titleShort[state.lang]}
    </div>
    <div>&nbsp;-&nbsp;</div>
    <div className={styles.media.hiddenMobile}>
      {messages.titleLong[state.lang]}
    </div>
    <div className={styles.media.hiddenDesktop}>
      {messages.titleShort[state.lang]}
    </div>
    <div className={styles.flex.itemSpace} />
    <img alt="info"
         className={styles.menu.toolbarImage}
         onClick={onClickInfo}
         src={img.info} />
    <img alt="layers"
         className={styles.menu.toolbarImage}
         onClick={onClickLayers}
         src={img.LAYERS} />
  </div>
);
