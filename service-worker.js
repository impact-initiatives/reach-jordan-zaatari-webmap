const version = 'v0.0.1';
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(version).then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './index-dist.html',
        './jspm.config.js',
        './jspm_packages/system.js',
        './dist/index.js',
        './dist/index-dev.js',
        './resources/img/ic_home_white_24px.svg',
        './resources/img/ic_menu_white_24px.svg',
        './resources/img/logo-reach.png',
        './resources/img/logo-unhcr.png',
        './resources/mapbox/styles/empty-v9.json',
        './resources/reach/block-boundaries.geojson',
        './resources/reach/camp-facilities.geojson',
        './resources/reach/district-boundaries.geojson',
        './node_modules/mapbox-gl/dist/mapbox-gl.css',
        './node_modules/mapbox-gl/dist/mapbox-gl.js',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
