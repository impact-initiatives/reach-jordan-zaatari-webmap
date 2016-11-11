import React from 'react';
import IntlMessageFormat from 'intl-messageformat';
import store from '../../../store/index.js';
import { IMG } from '../../../constants/resources.js';
import styles from '../../../styles/index.js';
import { isMobile } from '../../../constants/browser.js';
import COLORS from '../../../constants/colors.js';

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
  <div style={{
    ...styles.flex.horizontal.centerY,
    backgroundColor: COLORS.DARK_GREY_100,
    color: COLORS.WHITE,
    height: '48px',
    width: '100%',
  }}>
    <img alt="home"
         onClick={onClickHome}
         src={IMG.MENU_WHITE}
         style={{ cursor: 'pointer', padding: '12px' }} />
    <div>
      {isMobile() ? (
        new IntlMessageFormat(MESSAGES.TITLE_SHORT[state.lang], state.lang).format()
      ) : (
        new IntlMessageFormat(MESSAGES.TITLE_LONG[state.lang], state.lang).format()
      )}
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
);
