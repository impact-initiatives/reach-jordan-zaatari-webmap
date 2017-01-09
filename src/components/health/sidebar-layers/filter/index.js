import React from 'react';
import store from '../../../../store/index.js';
import getInitialState from '../../../../store/initial-state.js';
import FILTERS from '../../../../constants/filters/health.js';
import MESSAGES from '../../../../translations/health.js';
import FilterHeader from '../../../common/filter/filter-header.js';
import FilterItem from '../../../common/filter/filter-item.js';

function onReset() {
  store.dispatch({ type: (state) => ({
    ...state,
    filters: {
      ...state.filters,
      health: getInitialState().filters.health,
    },
  }) });
}

function onClick({ target }) {
  const { type } = target.dataset;
  store.dispatch({ type: (state) => ({
    ...state,
    filters: {
      ...state.filters,
      health: {
        ...state.filters.health,
        [type]: !state.filters.health[type],
      },
    },
  }) });
}

export default ({ state }) => (
  <div>
    <FilterHeader MESSAGES={MESSAGES}
                  onReset={onReset}
                  state={state} />
    <FilterItem name={MESSAGES.FILTER.ACUTE_CHRONIC[state.lang]}
                onClick={onClick}
                route="health"
                state={state}
                type={FILTERS.ACUTE_CHRONIC} />
    <FilterItem name={MESSAGES.FILTER.DENTIST[state.lang]}
                onClick={onClick}
                route="health"
                state={state}
                type={FILTERS.DENTIST} />
    <FilterItem name={MESSAGES.FILTER.ORT[state.lang]}
                onClick={onClick}
                route="health"
                state={state}
                type={FILTERS.ORT} />
    <FilterItem name={MESSAGES.FILTER.EMERGENCY[state.lang]}
                onClick={onClick}
                route="health"
                state={state}
                type={FILTERS.EMERGENCY} />
    <FilterItem name={MESSAGES.FILTER.GBV[state.lang]}
                onClick={onClick}
                route="health"
                state={state}
                type={FILTERS.GBV} />
    <FilterItem name={MESSAGES.FILTER.MALNUTRITION[state.lang]}
                onClick={onClick}
                route="health"
                state={state}
                type={FILTERS.MALNUTRITION} />
    <FilterItem name={MESSAGES.FILTER.PSYCHOTHERAPY[state.lang]}
                onClick={onClick}
                route="health"
                state={state}
                type={FILTERS.PSYCHOTHERAPY} />
    <FilterItem name={MESSAGES.FILTER.PHYSIOTHERAPY[state.lang]}
                onClick={onClick}
                route="health"
                state={state}
                type={FILTERS.PHYSIOTHERAPY} />
    <FilterItem name={MESSAGES.FILTER.REPRODUCTIVE[state.lang]}
                onClick={onClick}
                route="health"
                state={state}
                type={FILTERS.REPRODUCTIVE} />
    <FilterItem name={MESSAGES.FILTER.SECONDARY[state.lang]}
                onClick={onClick}
                route="health"
                state={state}
                type={FILTERS.SECONDARY} />
    <FilterItem name={MESSAGES.FILTER.VACCINATION[state.lang]}
                onClick={onClick}
                route="health"
                state={state}
                type={FILTERS.VACCINATION} />
  </div>
);
