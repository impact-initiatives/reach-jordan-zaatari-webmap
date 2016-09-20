const version = 'v1';

const whiteListRegExp = /^\/browser-sync\/socket.io\/$/;

const resources = [
  '/resources/img/favicon.gif',
  '/resources/img/ic_home_white_24px.svg',
  '/resources/img/ic_menu_white_24px.svg',
  '/resources/img/logo-reach.png',
  '/resources/img/logo-unhcr.png',
  '/resources/mapbox/styles/empty-v9.json',
  '/resources/reach/block-boundaries.geojson',
  '/resources/reach/camp-facilities.geojson',
  '/resources/reach/district-boundaries.geojson',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(version)
      .then(cache => cache.addAll(resources))
  );
});

function shouldHandleFetch(request) {
  const pathname = new URL(request.url).pathname;
  return (
    request.method === 'GET' &&
    !whiteListRegExp.test(pathname)
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
      .then(response => addToCache(event.request, response))
      .catch(() => fetchFromCache(event))
  );
}

self.addEventListener('fetch', (event) => {
  if (shouldHandleFetch(event.request)) onFetch(event);
});
