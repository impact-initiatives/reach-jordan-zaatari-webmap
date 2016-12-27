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
    <FilterItem MESSAGES={MESSAGES}
                name="ACUTE_CHRONIC"
                onClick={onClick}
                route="health"
                state={state}
                type={FILTERS.ACUTE_CHRONIC} />
    <FilterItem MESSAGES={MESSAGES}
                name="DENTIST"
                onClick={onClick}
                route="health"
                state={state}
                type={FILTERS.DENTIST} />
    <FilterItem MESSAGES={MESSAGES}
                name="ORT"
                onClick={onClick}
                route="health"
                state={state}
                type={FILTERS.ORT} />
    <FilterItem MESSAGES={MESSAGES}
                name="EMERGENCY"
                onClick={onClick}
                route="health"
                state={state}
                type={FILTERS.EMERGENCY} />
    <FilterItem MESSAGES={MESSAGES}
                name="GBV"
                onClick={onClick}
                route="health"
                state={state}
                type={FILTERS.GBV} />
    <FilterItem MESSAGES={MESSAGES}
                name="MALNUTRITION"
                onClick={onClick}
                route="health"
                state={state}
                type={FILTERS.MALNUTRITION} />
    <FilterItem MESSAGES={MESSAGES}
                name="PSYCHOTHERAPY"
                onClick={onClick}
                route="health"
                state={state}
                type={FILTERS.PSYCHOTHERAPY} />
    <FilterItem MESSAGES={MESSAGES}
                name="PHYSIOTHERAPY"
                onClick={onClick}
                route="health"
                state={state}
                type={FILTERS.PHYSIOTHERAPY} />
    <FilterItem MESSAGES={MESSAGES}
                name="REPRODUCTIVE"
                onClick={onClick}
                route="health"
                state={state}
                type={FILTERS.REPRODUCTIVE} />
    <FilterItem MESSAGES={MESSAGES}
                name="SECONDARY"
                onClick={onClick}
                route="health"
                state={state}
                type={FILTERS.SECONDARY} />
    <FilterItem MESSAGES={MESSAGES}
                name="VACCINATION"
                onClick={onClick}
                route="health"
                state={state}
                type={FILTERS.VACCINATION} />
  </div>
);
