#! /bin/bash

rm -rf ./deploy/
mkdir -p ./deploy/node_modules/mapbox-gl/

cp -a ./node_modules/normalize.css/. ./deploy/node_modules/normalize.css/
cp -a ./node_modules/mapbox-gl/dist/. ./deploy/node_modules/mapbox-gl/dist/
cp -a ./resources/. ./deploy/resources/
cp -a ./dist/. ./deploy/dist/
cp ./manifest.json ./deploy/manifest.json

cp ./index.html ./deploy/index.html
sed '$d' ./index.html | sed '$d' | sed '$d' | sed '$d' | sed '$d' > ./deploy/index.html
echo '  <script src="./dist/index.js"></script>' >> ./deploy/index.html
echo '</body>' >> ./deploy/index.html
echo '</html>' >> ./deploy/index.html
