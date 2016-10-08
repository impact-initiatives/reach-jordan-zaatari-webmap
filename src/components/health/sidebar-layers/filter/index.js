import React from 'react';
import radium from 'radium';
import FILTERS from '../../../../constants/filters/health.js';
import FilterHeader from './filter-header.js';
import FilterItem from './filter-item.js';

export default radium(({ state }) => (
  <div>
    <FilterHeader state={state} />
    <FilterItem name="ACUTE_CHRONIC"
                state={state}
                type={FILTERS.ACUTE_CHRONIC} />
    <FilterItem name="DENTIST"
                state={state}
                type={FILTERS.DENTIST} />
    <FilterItem name="ORT"
                state={state}
                type={FILTERS.ORT} />
    <FilterItem name="EMERGENCY"
                state={state}
                type={FILTERS.EMERGENCY} />
    <FilterItem name="GBV"
                state={state}
                type={FILTERS.GBV} />
    <FilterItem name="MALNUTRITION"
                state={state}
                type={FILTERS.MALNUTRITION} />
    <FilterItem name="PSYCHOTHERAPY"
                state={state}
                type={FILTERS.PSYCHOTHERAPY} />
    <FilterItem name="PHYSIOTHERAPY"
                state={state}
                type={FILTERS.PHYSIOTHERAPY} />
    <FilterItem name="REPRODUCTIVE"
                state={state}
                type={FILTERS.REPRODUCTIVE} />
    <FilterItem name="SECONDARY"
                state={state}
                type={FILTERS.SECONDARY} />
    <FilterItem name="VACCINATION"
                state={state}
                type={FILTERS.VACCINATION} />
  </div>
));
