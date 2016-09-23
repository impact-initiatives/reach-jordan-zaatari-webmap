import React from 'react';
import radium from 'radium';
import { DARK_GREY_100 } from '../../../constants/colors.js';
import styles from '../../../styles/index.js';

function onClick({ target }) {
  const { type } = target.dataset;
  location.assign(type);
}

export default radium(({ icon, name, type }) => (
  <div style={{ ...styles.flex.vertical.left }}>
    <div style={{ height: '6px' }} />
    <div data-type={type}
         onClick={onClick}
         style={{
           ...styles.flex.horizontal.centerY,
           backgroundColor: DARK_GREY_100,
           cursor: 'pointer',
           height: '52px',
         }}>
      <img alt={type}
           data-type={type}
           src={icon}
           style={{ padding: '12px' }} />
      <div data-type={type}>
        {name}
      </div>
    </div>
  </div>
));
