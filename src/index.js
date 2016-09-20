import 'fetch';
import 'intl';
import React from 'react';
import { render } from 'react-dom';
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

window.addEventListener('resize', () => {
  const state = store.getState();
  renderRoutes({ state });
});

const state = store.getState();
renderRoutes({ state });
