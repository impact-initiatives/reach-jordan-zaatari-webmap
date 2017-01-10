import React from 'react';
import store from '../../../../store/index.js';
import getInitialState from '../../../../store/initial-state.js';
import FILTERS from '../../../../constants/filters/health.js';
import messages from '../../../../translations/health.js';
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
    <FilterHeader messages={messages}
                  onReset={onReset}
                  state={state} />
    <FilterItem name={messages.filter.acuteChronic[state.lang]}
                onClick={onClick}
                route="health"
                state={state}
                type={FILTERS.acuteChronic} />
    <FilterItem name={messages.filter.dentist[state.lang]}
                onClick={onClick}
                route="health"
                state={state}
                type={FILTERS.dentist} />
    <FilterItem name={messages.filter.ort[state.lang]}
                onClick={onClick}
                route="health"
                state={state}
                type={FILTERS.ort} />
    <FilterItem name={messages.filter.emergency[state.lang]}
                onClick={onClick}
                route="health"
                state={state}
                type={FILTERS.emergency} />
    <FilterItem name={messages.filter.gbv[state.lang]}
                onClick={onClick}
                route="health"
                state={state}
                type={FILTERS.gbv} />
    <FilterItem name={messages.filter.malnutrition[state.lang]}
                onClick={onClick}
                route="health"
                state={state}
                type={FILTERS.malnutrition} />
    <FilterItem name={messages.filter.psychotherapy[state.lang]}
                onClick={onClick}
                route="health"
                state={state}
                type={FILTERS.psychotherapy} />
    <FilterItem name={messages.filter.physiotherapy[state.lang]}
                onClick={onClick}
                route="health"
                state={state}
                type={FILTERS.physiotherapy} />
    <FilterItem name={messages.filter.reproductive[state.lang]}
                onClick={onClick}
                route="health"
                state={state}
                type={FILTERS.reproductive} />
    <FilterItem name={messages.filter.secondary[state.lang]}
                onClick={onClick}
                route="health"
                state={state}
                type={FILTERS.secondary} />
    <FilterItem name={messages.filter.vaccination[state.lang]}
                onClick={onClick}
                route="health"
                state={state}
                type={FILTERS.vaccination} />
  </div>
);
