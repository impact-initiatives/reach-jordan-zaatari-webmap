/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["@turf/center.js","6743f6e3474b2973a664cc52eaa05213"],["@turf/helpers.js","ac393af7f2d179ba53780ead63baafb3"],["cache.manifest","ff1c78bc139c4ca1db86452f07a8470d"],["d3-dsv.js","95635c38f906258b93f1a9c0995a8808"],["index.css","4cd16ab4a5c247cf4e0318d27d8b6046"],["index.html","5ff4bd0e7e687019b6724a2917775d5d"],["index.js","c55bd23d7df393dff6fe0ca63eff878a"],["legacy.html","2b08610c43bd55d412150b5c085677f1"],["manifest.json","5d2f2a7626e5b3f05c769d1177616357"],["node_modules/mapbox-gl/dist/mapbox-gl.css","92205be2515c172d6fe26e979be23ccc"],["node_modules/mapbox-gl/dist/mapbox-gl.js","cde54a8b674d1a24caa39c17a0bcbeb3"],["node_modules/mapbox-gl/dist/svg/mapboxgl-ctrl-attrib.svg","4816a893b9788bd839907df525340270"],["node_modules/mapbox-gl/dist/svg/mapboxgl-ctrl-compass.svg","0c5763ce8ffcf8d2ab55872bd6d5f6ad"],["node_modules/mapbox-gl/dist/svg/mapboxgl-ctrl-geolocate.svg","8f0b755b03dc0a19f70dde034dc3e0e0"],["node_modules/mapbox-gl/dist/svg/mapboxgl-ctrl-zoom-in.svg","4576d967a9760a1006268910c543553c"],["node_modules/mapbox-gl/dist/svg/mapboxgl-ctrl-zoom-out.svg","36d0186400d701d3a7b1be10fbf32431"],["node_modules/normalize.css/normalize.css","8d9d541cc4c37ce152038f142628e199"],["react-dom.js","e6fdf9bc3ff12e7be31f9108a8563ecd"],["react.js","ee65ef7d0b460a3b805f255df8eb8341"],["redux.js","791b76267f99045f7b6fb6bd4a91b976"],["resources/icons/ic_apps_white_24px.svg","bda35609efc56a59402344493a185279"],["resources/icons/ic_check_box_outline_blank_white_24px.svg","78aa120466dc7cb195d796ca2af408e8"],["resources/icons/ic_home_white_24px.svg","ab58647ea6b0a73f26c4560844ce27b8"],["resources/icons/ic_info_white_24px.svg","03349d4cfb30f03d615c81015fedf40d"],["resources/icons/ic_layers_white_24px.svg","0d1c497144cd834ab835c396d56320d0"],["resources/icons/ic_local_drink_white_24px.svg","c5414ea160a2ecbb1dfaa3d297b3ccca"],["resources/icons/ic_local_hospital_white_24px.svg","83faabd892f907a9a3d84de1056d22a9"],["resources/icons/ic_menu_white_24px.svg","c800523f49b47cdc4ce9b41f50f6020c"],["resources/icons/infrastructure_mosque_100px_greenbox.png","10a80722cf7fdbe31f2ecf0f8844530a"],["resources/logos/reach.svg","016f86beafa4514c1b4dc674fb3f8977"],["resources/logos/unhcr.svg","93e584ac526a14ab1c4f93a30956c47e"],["resources/logos/unicef.svg","fd03f3ad1e6ca6ef3c97bf501c849041"],["resources/manifest/reach-144.png","8b4a3fe355a7984841cd953cf8051002"],["resources/manifest/reach-168.png","3c34fd0fce6897ead912c32c7a0e839f"],["resources/manifest/reach-192.png","be4be99eaab9a251b3f2af1307b955bf"],["resources/manifest/reach-48.png","6c46d1ae56a53401a600a22fd5a405dc"],["resources/manifest/reach-72.png","8badf019ed26c30064d50e1efcdbef9d"],["resources/manifest/reach-96.png","3e93437c8a55b8fb187d0835043345c6"],["resources/mapbox/fonts/open-sans-regular/0-255.pbf","daa7fc3d413fe9ed4b0deb849f8beac1"],["resources/mapbox/fonts/open-sans-regular/12288-12543.pbf","dc45b200deb4118163a73a0d8d8fc8bf"],["resources/mapbox/fonts/open-sans-regular/1536-1791.pbf","5b833384a5c128ec265d64adbd01f40b"],["resources/mapbox/fonts/open-sans-regular/65024-65279.pbf","2204c63f93ade149de0e25a13a6ed393"],["resources/mapbox/fonts/open-sans-regular/65280-65535.pbf","332bdb50e550d99ee5bd467b7ada98c9"],["resources/mapbox/plugins/mapbox-gl-rtl-text.js","708ed38927ef7fd7ea3a51662d1d8a3d"],["resources/mapbox/styles/empty-v9.json","9fda8b26482046bbfaf02b42e3b56034"],["resources/reach/BlockBoundaries_2016_12.topojson","39d3e1f960cea0802bf35611f669a57f"],["resources/reach/CampFacilities_2017_02.topojson","b7087fc5a32b6f45f69967ffb0178924"],["resources/reach/DistrictBoundaries_2016_12.topojson","d7c6ed40756081f0972aac84befeca65"],["resources/reach/Households_2017_04.csv","ae339871588eff372ff851e9f72fcbc5"],["resources/reach/Mosques_2017_01.csv","52b73b923cf6766b5aaf3d5d2e1a7365"],["resources/reach/Pipes_Septic_2017_03.topojson","d4ea0d9a2f4b0da5d781efa7f6fd932a"],["resources/reach/Pipes_SolidFree_2017_03.topojson","9c7707103be58c2a579a8bb12b8cbb36"],["resources/reach/Roads_2016_12.topojson","c51a2f04c0534ba56a3c7576cc0f02b9"],["resources/reach/SepticTanks_2017_04.csv","b1ee459e4d9788c47e6eee4bc890d82b"],["resources/reach/SteelTanks_2017_04.csv","9e122c55ac8e988b9053886e0e2db09c"],["topojson-client.js","bb419e188368c5e4cb1b24c34b248b4a"],["whatwg-fetch.js","8d852d801a3686f1a06e5bed9eaf4eb1"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







