import React from 'react';
import radium from 'radium';
import store from '../../../store/index.js';
import styles from '../../../styles/index.js';
import { DESKTOP_WIDTH_MIN } from '../../../constants/browser.js';
import { DARK_GREY_100, DARK_GREY_50, WHITE } from '../../../constants/colors.js';
import FILTER_ITEMS from '../../../constants/layer-items.js';
import { getWidthTransitionStyle } from '../../../styles/animations.js';
import getInitialState from '../../../store/initial-state.js';
import FilterItem from './layer-item.js';
import Legend from './legend/index.js';

function onReset() {
  store.dispatch({ type: (prevState) => {
    const state = JSON.parse(JSON.stringify(prevState));
    state.filters = getInitialState().filters;
    return state;
  } });
}

export default radium(({ state }) => (
  <div style={{
    ...getWidthTransitionStyle({ visible: state.sidebarLayers.open }),
    backgroundColor: DARK_GREY_50,
    color: WHITE,
    height: '100%',
    position: 'absolute',
    right: '0px',
    width: document.body.clientWidth > DESKTOP_WIDTH_MIN ? '400px' : '75%',
    zIndex: '1',
  }}>
    <Legend />
    <div style={{
      backgroundColor: DARK_GREY_100,
      margin: '12px 0px',
      padding: '3px 0px',
    }} />
    <div style={styles.flex.horizontal.centerY}>
      <div style={{
        fontWeight: '600',
        padding: '6px 24px',
      }}>
        Filter Services
      </div>
      <div onClick={onReset}
            style={{
              backgroundColor: DARK_GREY_100,
              cursor: 'pointer',
              padding: '6px',
            }}>reset</div>
    </div>
    {FILTER_ITEMS.map(({ icon, name, type }, index) => (
      <FilterItem icon={icon}
                  key={index}
                  name={name}
                  state={state}
                  type={type} />
    ))}
  </div>
));
