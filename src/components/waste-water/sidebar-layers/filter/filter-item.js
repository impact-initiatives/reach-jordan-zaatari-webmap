import React from 'react';
import radium from 'radium';
import IntlMessageFormat from 'intl-messageformat';
import MESSAGES from '../../../../translations/waste-water.js';
import store from '../../../../store/index.js';
import COLORS from '../../../../constants/colors.js';
import styles from '../../../../styles/index.js';

function onClick({ target }) {
  const { type } = target.dataset;
  store.dispatch({ type: (state) => ({
    ...state,
    filters: {
      ...state.filters,
      wasteWater: {
        ...state.filters.wasteWater,
        [type]: !state.filters.wasteWater[type],
      },
    },
  }) });
}

export default radium(({ icon, name, state, type }) => (
  <div style={{ ...styles.flex.vertical.left }}>
    <div style={{ height: '6px' }} />
    <div data-type={type}
         onClick={onClick}
         style={{
           ...styles.flex.horizontal.centerY,
           backgroundColor: COLORS.DARK_GREY_100,
           color: state.filters.wasteWater[type] ? COLORS.LIGHT_BLUE : COLORS.WHITE,
           cursor: 'pointer',
           height: '52px',
         }}>
      <div alt={type}
           data-type={type}
           src={icon}
           style={{ padding: '0px 12px' }} />
      <div data-type={type}>
        {new IntlMessageFormat(MESSAGES.FILTER[name][state.lang], state.lang).format()}
      </div>
    </div>
  </div>
));
