const version = 'v1';

const whiteListRegExp = /^\/browser-sync\/socket.io\/$/;

const resources = [
  '/index.html',
  '/dist/index.js',
  '/node_modules/mapbox-gl/dist/mapbox-gl.css',
  '/node_modules/mapbox-gl/dist/mapbox-gl.js',
  '/resources/img/favicon.gif',
  '/resources/img/ic_apps_white_24px.svg',
  '/resources/img/ic_home_white_24px.svg',
  '/resources/img/ic_info_white_24px.svg',
  '/resources/img/ic_layers_white_24px.svg',
  '/resources/img/ic_local_hospital_white_24px.svg',
  '/resources/img/ic_menu_white_24px.svg',
  '/resources/img/ic_open_in_new_white_24px.svg',
  '/resources/img/logo-reach.png',
  '/resources/img/logo-unhcr.png',
  '/resources/mapbox/fonts/open-sans-regular/0-255.pbf',
  '/resources/mapbox/styles/empty-v9.json',
  '/resources/reach/block-boundaries.geojson',
  '/resources/reach/camp-facilities.geojson',
  '/resources/reach/district-boundaries.geojson',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(version)
      .then((cache) => cache.addAll(resources))
  );
});

function shouldHandleFetch(request) {
  const url = new URL(request.url);
  return (
    request.method === 'GET' &&
    url.origin === self.location.origin &&
    !whiteListRegExp.test(url.pathname)
  );
}

function addToCache(request, response) {
  if (response.ok) {
    const copy = response.clone();
    caches.open(version).then((cache) => {
      cache.put(request, copy);
    });
    return response;
  }
  throw Error('Response not ok');
}

function fetchFromCache(event) {
  return caches.match(event.request)
    .then((response) => {
      if (!response) throw Error(`${event.request.url} not found in cache`);
      return response;
    });
}

function onFetch(event) {
  event.respondWith(
    fetch(event.request)
      .then((response) => addToCache(event.request, response))
      .catch(() => fetchFromCache(event))
  );
}

self.addEventListener('fetch', (event) => {
  if (shouldHandleFetch(event.request)) onFetch(event);
});
