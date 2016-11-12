import React from 'react';
import SearchHeader from './search-header.js';
import SearchBar from './search-bar.js';

export default ({ state }) => (
  <div>
    <SearchHeader state={state} />
    <SearchBar state={state} />
  </div>
);
