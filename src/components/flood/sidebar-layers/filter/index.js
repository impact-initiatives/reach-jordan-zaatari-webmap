import React from 'react';
import store from '../../../../store/index.js';
import getInitialState from '../../../../store/initial-state.js';
import FILTERS from '../../../../constants/filters/flood.js';
import messages from '../../../../translations/flood.js';
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
    <FilterHeader messages={messages}
                  onReset={onReset}
                  state={state} />
    <FilterItem name={messages.filter.contingenctTank[state.lang]}
                onClick={onClick}
                route="flood"
                state={state}
                type={FILTERS.contingenctTank} />
    <FilterItem name={messages.filter.facility[state.lang]}
                onClick={onClick}
                route="flood"
                state={state}
                type={FILTERS.facility} />
    <FilterItem name={messages.filter.flood[state.lang]}
                onClick={onClick}
                route="flood"
                state={state}
                type={FILTERS.flood} />
    <FilterItem name={messages.filter.floodLight[state.lang]}
                onClick={onClick}
                route="flood"
                state={state}
                type={FILTERS.floodLight} />
    <FilterItem name={messages.filter.shelter[state.lang]}
                onClick={onClick}
                route="flood"
                state={state}
                type={FILTERS.shelter} />
    <FilterItem name={messages.filter.shelterLight[state.lang]}
                onClick={onClick}
                route="flood"
                state={state}
                type={FILTERS.shelterLight} />
  </div>
);
