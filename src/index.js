import 'babel-polyfill'; // eslint-disable-line import/no-extraneous-dependencies
import 'whatwg-fetch';
import React from 'react';
import { render } from 'react-dom';
import store from './store/index.js';
import Routes from './components/index.js';

function refresh() {
  render(
    <Routes state={store.getState()} />,
    document.getElementById('root'),
  );
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js');
} else {
  const { pathname } = location;
  const path = pathname.substring(0, pathname.lastIndexOf('/'));
  const newLocation = `${path}/legacy.html`;
  if (pathname !== newLocation) location.assign(`${newLocation}${location.hash}`);
}

store.subscribe(refresh);

window.addEventListener('hashchange', refresh);
window.addEventListener('resize', refresh);

if (module.hot) module.hot.accept('./components/index.js', refresh);

refresh();
