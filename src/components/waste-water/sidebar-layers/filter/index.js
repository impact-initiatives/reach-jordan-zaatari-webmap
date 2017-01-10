import React from 'react';
import store from '../../../../store/index.js';
import getInitialState from '../../../../store/initial-state.js';
import FILTERS from '../../../../constants/filters/waste-water.js';
import messages from '../../../../translations/waste-water.js';
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
    <FilterHeader messages={messages}
                  onReset={onReset}
                  state={state} />
    <FilterItem name={messages.filter.septicTanks8m3[state.lang]}
                onClick={onClick}
                route="wasteWater"
                state={state}
                type={FILTERS.septicTanks8m3} />
    <FilterItem name={messages.filter.septicTanks4m3[state.lang]}
                onClick={onClick}
                route="wasteWater"
                state={state}
                type={FILTERS.septicTanks4m3} />
    <FilterItem name={messages.filter.septicTanks2m3[state.lang]}
                onClick={onClick}
                route="wasteWater"
                state={state}
                type={FILTERS.septicTanks2m3} />
    <FilterItem name={messages.filter.steelTanks[state.lang]}
                onClick={onClick}
                route="wasteWater"
                state={state}
                type={FILTERS.steelTanks} />
    <FilterItem name={messages.filter.pipes[state.lang]}
                onClick={onClick}
                route="wasteWater"
                state={state}
                type={FILTERS.pipes} />
  </div>
);
