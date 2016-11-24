import React from 'react';
import { css } from 'aphrodisiac';
import IntlMessageFormat from 'intl-messageformat';
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
  <div className={css(
    styles.flex.horizontal.centerY,
    styles.toolbar.default,
  )}>
    <img alt="home"
         className={css(styles.toolbar.img)}
         onClick={onClickHome}
         src={IMG.MENU_WHITE} />
    <div style={{ display: styles.display.desktop() }}>
      {new IntlMessageFormat(COMMON_MESSAGES.TITLE_LONG[state.lang], state.lang).format()}
    </div>
    <div style={{ display: styles.display.mobile() }}>
      {new IntlMessageFormat(COMMON_MESSAGES.TITLE_SHORT[state.lang], state.lang).format()}
    </div>
    <div>&nbsp;-&nbsp;</div>
    <div style={{ display: styles.display.desktop() }}>
      {new IntlMessageFormat(MESSAGES.TITLE_LONG[state.lang], state.lang).format()}
    </div>
    <div style={{ display: styles.display.mobile() }}>
      {new IntlMessageFormat(MESSAGES.TITLE_SHORT[state.lang], state.lang).format()}
    </div>
    <div className={css(styles.flex.item.space)} />
    <img alt="info"
         className={css(styles.toolbar.img)}
         onClick={onClickInfo}
         src={IMG.INFO_WHITE} />
    <img alt="layers"
         className={css(styles.toolbar.img)}
         onClick={onClickLayers}
         src={IMG.LAYERS_WHITE} />
  </div>
);
