#! /bin/bash

rm -rf ./dist/

webpack -p

mkdir -p ./dist/node_modules/mapbox-gl/
mkdir -p ./dist/node_modules/normalize.css/

cp ./manifest.json ./dist/manifest.json
cp -a ./resources/. ./dist/resources/
cp -a ./node_modules/normalize.css/. ./dist/node_modules/normalize.css/
cp -a ./node_modules/mapbox-gl/dist/. ./dist/node_modules/mapbox-gl/dist/

appcache-manifest \
  ./dist/*.* \
  ./dist/resources/*.* \
  ./dist/**/**/*.* \
  ./dist/**/**/**/*.* \
  ./dist/**/**/**/**/*.* \
  --network-star \
  -o ./dist/cache.manifest
appcache-manifest-fixer ./dist/index.html \
  -m ./dist/cache.manifest \
  -o ./dist/legacy.html
node ./node_modules/.bin/sw-precache \
  --root=dist \
  --maximumFileSizeToCacheInBytes=10485760
