import 'babel-polyfill';
import 'fetch';
import 'intl';
import 'intl/locale-data/jsonp/en-GB.js';
import 'intl/locale-data/jsonp/ar-JO.js';
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

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js');
} else {
  const { pathname } = location;
  const path = pathname.substring(0, pathname.lastIndexOf('/'));
  const newLocation = `${path}/offline.html`;
  if (pathname !== newLocation) location.href = `${newLocation}${location.hash}`;
}

store.subscribe(() => {
  const state = store.getState();
  renderRoutes({ state });
});

window.addEventListener('hashchange', () => {
  const state = store.getState();
  renderRoutes({ state });
});

window.addEventListener('resize', () => {
  const state = store.getState();
  renderRoutes({ state });
});

const state = store.getState();
renderRoutes({ state });
