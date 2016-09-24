import React from 'react';
import radium from 'radium';
import { DESKTOP_WIDTH_MIN } from '../../../constants/browser.js';
import { DARK_GREY_100, DARK_GREY_50, WHITE } from '../../../constants/colors.js';
import FILTER_ITEMS from '../../../constants/filter-items.js';
import { ARABIC } from '../../../constants/language.js';
import { getWidthTransitionStyle } from '../../../styles/animations.js';
import FilterHeader from './filter-header.js';
import FilterItem from './filter-item.js';
import Legend from './legend/index.js';

export default radium(({ state }) => (
  <div style={{
    ...getWidthTransitionStyle({ visible: state.sidebarLayers.open }),
    backgroundColor: DARK_GREY_50,
    color: WHITE,
    height: '100%',
    position: 'absolute',
    [state.lang === ARABIC ? 'left' : 'right']: '0px',
    width: document.body.clientWidth > DESKTOP_WIDTH_MIN ? '400px' : '75%',
    zIndex: '1',
  }}>
    <Legend state={state} />
    <div style={{
      backgroundColor: DARK_GREY_100,
      margin: '12px 0px',
      padding: '3px 0px',
    }} />
    <FilterHeader state={state} />
    {FILTER_ITEMS.map(({ icon, name, type }, index) => (
      <FilterItem icon={icon}
                  key={index}
                  name={name}
                  state={state}
                  type={type} />
    ))}
  </div>
));
