#! /bin/bash

rm -rf ./deploy/
mkdir -p ./deploy/node_modules/mapbox-gl/

cp ./index.html ./deploy/index.html
cp ./manifest.json ./deploy/manifest.json
cp -a ./dist/. ./deploy/dist/
cp -a ./node_modules/normalize.css/. ./deploy/node_modules/normalize.css/
cp -a ./node_modules/mapbox-gl/dist/. ./deploy/node_modules/mapbox-gl/dist/
cp -a ./resources/. ./deploy/resources/
