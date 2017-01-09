import React from 'react';
import styles from '../../../styles/index.js';

export default ({ name, onClick, route, state, type }) => (
  <div className={styles.flex.verticalNormal}>
    <div className={[
      styles.flex.horizontalCenterY,
      styles.component.homeItem,
      state.filters[route][type] ? styles.inline.colorLightBlue : styles.inline.colorWhite,
    ].join(' ')}
    data-type={type}
    onClick={onClick}>
      <div className={styles.inline.margin0x12} />
      <div data-type={type}>
        {name}
      </div>
    </div>
  </div>
);
