import React from 'react';
import store from '../../../../store/index.js';
import getInitialState from '../../../../store/initial-state.js';
import FILTERS from '../../../../constants/filters/flood.js';
import MESSAGES from '../../../../translations/flood.js';
import FilterHeader from '../../../common/filter/filter-header.js';
import FilterItem from '../../../common/filter/filter-item.js';

function onReset() {
  store.dispatch({ type: (state) => ({
    ...state,
    filters: {
      ...state.filters,
      flood: getInitialState().filters.flood,
    },
  }) });
}

function onClick({ target }) {
  const { type } = target.dataset;
  store.dispatch({ type: (state) => ({
    ...state,
    filters: {
      ...state.filters,
      flood: {
        ...state.filters.flood,
        [type]: !state.filters.flood[type],
      },
    },
  }) });
}

export default ({ state }) => (
  <div>
    <FilterHeader MESSAGES={MESSAGES}
                  onReset={onReset}
                  state={state} />
    <FilterItem name={MESSAGES.FILTER.CONTINGENCY_TANK[state.lang]}
                onClick={onClick}
                route="flood"
                state={state}
                type={FILTERS.CONTINGENCY_TANK} />
    <FilterItem name={MESSAGES.FILTER.FACILITY[state.lang]}
                onClick={onClick}
                route="flood"
                state={state}
                type={FILTERS.FACILITY} />
    <FilterItem name={MESSAGES.FILTER.FLOOD[state.lang]}
                onClick={onClick}
                route="flood"
                state={state}
                type={FILTERS.FLOOD} />
    <FilterItem name={MESSAGES.FILTER.FLOOD_LIGHT[state.lang]}
                onClick={onClick}
                route="flood"
                state={state}
                type={FILTERS.FLOOD_LIGHT} />
    <FilterItem name={MESSAGES.FILTER.SHELTER[state.lang]}
                onClick={onClick}
                route="flood"
                state={state}
                type={FILTERS.SHELTER} />
    <FilterItem name={MESSAGES.FILTER.SHELTER_LIGHT[state.lang]}
                onClick={onClick}
                route="flood"
                state={state}
                type={FILTERS.SHELTER_LIGHT} />
  </div>
);
