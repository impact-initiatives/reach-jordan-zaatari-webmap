import React from 'react';
import radium from 'radium';
import SearchHeader from './search-header.js';
import SearchBar from './search-bar.js';

export default radium(({ state }) => (
  <div>
    <SearchHeader state={state} />
    <SearchBar state={state} />
  </div>
));
