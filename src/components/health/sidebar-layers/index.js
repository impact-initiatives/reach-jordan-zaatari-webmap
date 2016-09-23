import React from 'react';
import radium from 'radium';
import { DESKTOP_WIDTH_MIN } from '../../../constants/browser.js';
import { DARK_GREY_50, WHITE } from '../../../constants/colors.js';
import { getWidthTransitionStyle } from '../../../styles/animations.js';
import FilterItem from './layer-item.js';
import FILTER_ITEMS from '../../../constants/layer-items.js';

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
    {FILTER_ITEMS.map(({ icon, name, type }, index) => (
      <FilterItem icon={icon}
                  key={index}
                  name={name}
                  state={state}
                  type={type} />
    ))}
  </div>
));
