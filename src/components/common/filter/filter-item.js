import React from 'react';
import styles from '../../../styles/index.js';

export default ({ icon, MESSAGES, name, onClick, route, state, type }) => (
  <div className={styles.flexVerticalLeft}>
    <div className={[
      styles.flex.horizontalCenterY,
      styles.component.homeItem,
      state.filters[route][type] ? styles.inline.colorLightBlue : styles.inline.colorWhite,
    ].join(' ')}
    data-type={type}
    onClick={onClick}>
      <div alt={type}
           className={styles.inline.margin0x12}
           data-type={type}
           src={icon} />
      <div data-type={type}>
        {MESSAGES.FILTER[name][state.lang]}
      </div>
    </div>
  </div>
);
