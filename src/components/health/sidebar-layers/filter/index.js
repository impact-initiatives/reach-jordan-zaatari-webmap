import React from 'react';
import store from '../../../../store/index.js';
import getInitialState from '../../../../store/initial-state.js';
import filtersHealth from '../../../../constants/filters/health.js';
import messages from '../../../../translations/health.js';
import FilterHeader from '../../../common/filter/filter-header.js';
import FilterItem from '../../../common/filter/filter-item.js';

const ROUTE = 'health';

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
    <FilterHeader messages={messages}
                  onReset={onReset}
                  state={state} />
    <FilterItem name={messages.filter.acuteChronic[state.lang]}
                onClick={onClick}
                route={ROUTE}
                state={state}
                type={filtersHealth.ACUTE_CHRONIC} />
    <FilterItem name={messages.filter.dentist[state.lang]}
                onClick={onClick}
                route={ROUTE}
                state={state}
                type={filtersHealth.DENTIST} />
    <FilterItem name={messages.filter.ort[state.lang]}
                onClick={onClick}
                route={ROUTE}
                state={state}
                type={filtersHealth.ORT} />
    <FilterItem name={messages.filter.emergency[state.lang]}
                onClick={onClick}
                route={ROUTE}
                state={state}
                type={filtersHealth.EMERGENCY} />
    <FilterItem name={messages.filter.gbv[state.lang]}
                onClick={onClick}
                route={ROUTE}
                state={state}
                type={filtersHealth.GBV} />
    <FilterItem name={messages.filter.malnutrition[state.lang]}
                onClick={onClick}
                route={ROUTE}
                state={state}
                type={filtersHealth.MALNUTRITION} />
    <FilterItem name={messages.filter.psychotherapy[state.lang]}
                onClick={onClick}
                route={ROUTE}
                state={state}
                type={filtersHealth.PSYCHOTHERAPY} />
    <FilterItem name={messages.filter.physiotherapy[state.lang]}
                onClick={onClick}
                route={ROUTE}
                state={state}
                type={filtersHealth.PHYSIOTHERAPY} />
    <FilterItem name={messages.filter.reproductive[state.lang]}
                onClick={onClick}
                route={ROUTE}
                state={state}
                type={filtersHealth.REPRODUCTIVE} />
    <FilterItem name={messages.filter.secondary[state.lang]}
                onClick={onClick}
                route={ROUTE}
                state={state}
                type={filtersHealth.SECONDARY} />
    <FilterItem name={messages.filter.vaccination[state.lang]}
                onClick={onClick}
                route={ROUTE}
                state={state}
                type={filtersHealth.VACCINATION} />
  </div>
);
