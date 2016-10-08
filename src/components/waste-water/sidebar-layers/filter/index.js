import React from 'react';
import radium from 'radium';
import FILTERS from '../../../../constants/filters/waste-water.js';
import FilterHeader from './filter-header.js';
import FilterItem from './filter-item.js';

export default radium(({ state }) => (
  <div>
    <FilterHeader state={state} />
    <FilterItem name="SEPTIC_TANKS_8M3"
                state={state}
                type={FILTERS.SEPTIC_TANKS_8M3} />
    <FilterItem name="SEPTIC_TANKS_4M3"
                state={state}
                type={FILTERS.SEPTIC_TANKS_4M3} />
    <FilterItem name="SEPTIC_TANKS_2M3"
                state={state}
                type={FILTERS.SEPTIC_TANKS_2M3} />
    <FilterItem name="STEEL_TANKS"
                state={state}
                type={FILTERS.STEEL_TANKS} />
    <FilterItem name="PIPES"
                state={state}
                type={FILTERS.PIPES} />
  </div>
));
