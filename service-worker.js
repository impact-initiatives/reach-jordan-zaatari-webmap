const version = 'v1';

const whiteListRegExp = /^\/browser-sync\/socket.io\/$/;

const resources = [
  '/index.html',
  '/dist/index.js',
  '/node_modules/normalize.css/normalize.css',
  '/node_modules/mapbox-gl/dist/mapbox-gl.css',
  '/node_modules/mapbox-gl/dist/mapbox-gl.js',
  '/node_modules/mapbox-gl/dist/svg/mapboxgl-ctrl-compass.svg',
  '/node_modules/mapbox-gl/dist/svg/mapboxgl-ctrl-zoom-in.svg',
  '/node_modules/mapbox-gl/dist/svg/mapboxgl-ctrl-geolocate.svg',
  '/node_modules/mapbox-gl/dist/svg/mapboxgl-ctrl-zoom-out.svg',
  '/resources/img/favicon.gif',
  '/resources/img/ic_apps_white_24px.svg',
  '/resources/img/ic_check_box_outline_blank_white_24px.svg',
  '/resources/img/ic_home_white_24px.svg',
  '/resources/img/ic_info_white_24px.svg',
  '/resources/img/ic_layers_white_24px.svg',
  '/resources/img/ic_local_drink_white_24px.svg',
  '/resources/img/ic_local_hospital_white_24px.svg',
  '/resources/img/ic_menu_white_24px.svg',
  '/resources/img/ic_open_in_new_white_24px.svg',
  '/resources/img/logo-reach.png',
  '/resources/img/logo-unhcr.svg',
  '/resources/img/logo-unicef.svg',
  '/resources/mapbox/fonts/open-sans-regular/0-255.pbf',
  '/resources/mapbox/fonts/open-sans-regular/1536-1791.pbf',
  '/resources/mapbox/styles/empty-v9.json',
  '/resources/reach/block-boundaries.geojson',
  '/resources/reach/camp-facilities.geojson',
  '/resources/reach/district-boundaries.geojson',
  '/resources/reach/pipes.geojson',
  '/resources/reach/septic-tanks.geojson',
  '/resources/reach/steel-tanks.geojson',
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
