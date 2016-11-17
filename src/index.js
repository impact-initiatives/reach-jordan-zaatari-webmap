import 'babel-polyfill';
import 'whatwg-fetch';
import 'intl';
import 'intl/locale-data/jsonp/en-GB.js';
import 'intl/locale-data/jsonp/ar-JO.js';
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
  if (pathname !== newLocation) location.href = `${newLocation}${location.hash}`;
}

store.subscribe(refresh);

window.addEventListener('hashchange', refresh);
window.addEventListener('resize', refresh);

if (module.hot) module.hot.accept('./components/index.js', refresh);

refresh();
