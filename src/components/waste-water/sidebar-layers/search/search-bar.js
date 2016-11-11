import React from 'react';
import radium from 'radium';
import IntlMessageFormat from 'intl-messageformat';
import MESSAGES from '../../../../translations/waste-water.js';
import store from '../../../../store/index.js';
import styles from '../../../../styles/index.js';

function onChange({ target }) {
  const { value } = target;
  store.dispatch({ type: (state) => ({
    ...state,
    search: {
      ...state.search,
      wasteWater: value,
    },
  }) });
}

function onKeyUp({ keyCode, target }) {
  if (keyCode === 13) {
    target.blur();
    store.dispatch({ type: (state) => ({
      ...state,
      sidebarLayers: {
        ...state.sidebarLayers,
        open: false,
      },
    }) });
  }
}

export default radium(({ state }) => (
  <div style={{ ...styles.flex.vertical.left }}>
    <div style={{ height: '6px' }} />
    <input onChange={onChange}
           onKeyUp={onKeyUp}
           placeholder={
             new IntlMessageFormat(MESSAGES.SEARCH.SEARCH_BAR[state.lang], state.lang).format()}
           style={{
             ...styles.flex.horizontal.centerY,
             height: '24px',
             margin: '0px 12px 0px 24px',
           }}
           value={state.search.wasteWater} />
  </div>
));
