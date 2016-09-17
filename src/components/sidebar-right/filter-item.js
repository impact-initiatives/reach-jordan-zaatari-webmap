import React from 'react';
import radium from 'radium';
import store from '../../store/index.js';
import { DARK_GREY_100, DARK_GREY_50, LIGHT_BLUE, WHITE } from '../../constants/colors.js';
import styles from '../../styles/index.js';
import getInitialState from '../../store/initial-state.js';

function onClick({ target }) {
  const { type } = target.dataset;
  if (type === 'all') {
    store.dispatch({ type: (prevState) => {
      const state = JSON.parse(JSON.stringify(prevState));
      state.filters = {
        ...getInitialState().filters,
        all: !state.filters.all,
      };
      return state;
    } });
  } else {
    store.dispatch({ type: (prevState) => {
      const state = JSON.parse(JSON.stringify(prevState));
      state.filters.all = false;
      state.filters[type] = !state.filters[type];
      return state;
    } });
  }
}

export default radium(({ icon, name, state, type }) => (
  <div style={{ ...styles.flex.vertical.left }}>
    <div style={{
      backgroundColor: DARK_GREY_50,
      height: '6px',
    }} />
    <div data-type={type}
         onClick={onClick}
         style={{
           ...styles.flex.horizontal.centerY,
           backgroundColor: DARK_GREY_100,
           color: state.filters[type] ? LIGHT_BLUE : WHITE,
           cursor: 'pointer',
           height: '52px',
         }}>
      <div alt={type}
           data-type={type}
           src={icon}
           style={{ padding: '12px' }} />
      <div data-type={type}>
        {name}
      </div>
    </div>
  </div>
));
