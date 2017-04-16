#! /bin/bash

rm -rf ./dist/

webpack -p

mkdir -p ./dist/node_modules/mapbox-gl/dist/svg/
mkdir -p ./dist/node_modules/normalize.css/

cp ./manifest.json ./dist/manifest.json
cp -a ./resources/. ./dist/resources/
cp -a ./node_modules/normalize.css/normalize.css ./dist/node_modules/normalize.css/normalize.css
cp -a ./node_modules/mapbox-gl/dist/svg/. ./dist/node_modules/mapbox-gl/dist/svg/
cp ./node_modules/mapbox-gl/dist/mapbox-gl.css ./dist/node_modules/mapbox-gl/dist/mapbox-gl.css
cp ./node_modules/mapbox-gl/dist/mapbox-gl.js ./dist/node_modules/mapbox-gl/dist/mapbox-gl.js

appcache-manifest-fixer ./dist/index.html \
  -m ./cache.manifest \
  -o ./dist/legacy.html

appcache-manifest \
  ./dist/*.* \
  ./dist/@turf/*.* \
  ./dist/resources/*.* \
  ./dist/**/**/*.* \
  ./dist/**/**/**/*.* \
  ./dist/**/**/**/**/*.* \
  --network-star \
  -o ./dist/cache.manifest

node ./node_modules/.bin/sw-precache \
  --root=dist \
  --maximumFileSizeToCacheInBytes=10485760
