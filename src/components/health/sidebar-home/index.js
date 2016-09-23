import React from 'react';
import radium from 'radium';
import { DESKTOP_WIDTH_MIN } from '../../../constants/browser.js';
import { DARK_GREY_50, WHITE } from '../../../constants/colors.js';
import { getWidthTransitionStyle } from '../../../styles/animations.js';
import HomeItem from './home-item.js';
import HOME_ITEMS from '../../../constants/home-items.js';

export default radium(({ state }) => (
  <div style={{
    ...getWidthTransitionStyle({ visible: state.sidebarHome.open }),
    backgroundColor: DARK_GREY_50,
    color: WHITE,
    height: '100%',
    position: 'absolute',
    left: '0px',
    width: document.body.clientWidth > DESKTOP_WIDTH_MIN ? '400px' : '75%',
    zIndex: '1',
  }}>
    {HOME_ITEMS.map(({ icon, name, type }, index) => (
      <HomeItem icon={icon}
                key={index}
                name={name}
                type={type} />
    ))}
  </div>
));