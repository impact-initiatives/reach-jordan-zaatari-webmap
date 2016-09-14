import 'babel-polyfill';
import 'fetch';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import store from './store/index.js';
import Routes from './components/index.js';

function renderRoutes({ state }) {
  render(
    <Routes state={state} />,
    document.getElementById('root')
  );
}

store.subscribe(() => {
  const state = store.getState();
  renderRoutes({ state });
});

const state = store.getState();
renderRoutes({ state });

// export function __reload() { // eslint-disable-line no-underscore-dangle
//   const state = store.getState();
//   renderRoutes({ state });
// }
//
// export function __unload() { // eslint-disable-line no-underscore-dangle
//   unmountComponentAtNode(document.getElementById('root'));
// }
