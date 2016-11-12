import React from 'react';
import store from '../../../../store/index.js';
import getInitialState from '../../../../store/initial-state.js';
import FILTERS from '../../../../constants/filters/waste-water.js';
import MESSAGES from '../../../../translations/waste-water.js';
import FilterHeader from '../../../common/filter/filter-header.js';
import FilterItem from '../../../common/filter/filter-item.js';

function onReset() {
  store.dispatch({ type: (state) => ({
    ...state,
    filters: {
      ...state.filters,
      wasteWater: getInitialState().filters.wasteWater,
    },
  }) });
}

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

export default ({ state }) => (
  <div>
    <FilterHeader MESSAGES={MESSAGES}
                  onReset={onReset}
                  state={state} />
    <FilterItem MESSAGES={MESSAGES}
                name="SEPTIC_TANKS_8M3"
                onClick={onClick}
                route="wasteWater"
                state={state}
                type={FILTERS.SEPTIC_TANKS_8M3} />
    <FilterItem MESSAGES={MESSAGES}
                name="SEPTIC_TANKS_4M3"
                onClick={onClick}
                route="wasteWater"
                state={state}
                type={FILTERS.SEPTIC_TANKS_4M3} />
    <FilterItem MESSAGES={MESSAGES}
                name="SEPTIC_TANKS_2M3"
                onClick={onClick}
                route="wasteWater"
                state={state}
                type={FILTERS.SEPTIC_TANKS_2M3} />
    <FilterItem MESSAGES={MESSAGES}
                name="STEEL_TANKS"
                onClick={onClick}
                route="wasteWater"
                state={state}
                type={FILTERS.STEEL_TANKS} />
    <FilterItem MESSAGES={MESSAGES}
                name="PIPES"
                onClick={onClick}
                route="wasteWater"
                state={state}
                type={FILTERS.PIPES} />
  </div>
);
