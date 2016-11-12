#! /bin/bash

rm -rf ./deploy/
mkdir -p ./deploy/node_modules/mapbox-gl/

cp -a ./node_modules/normalize.css/. ./deploy/node_modules/normalize.css/
cp -a ./node_modules/mapbox-gl/dist/. ./deploy/node_modules/mapbox-gl/dist/
cp -a ./resources/. ./deploy/resources/
cp -a ./dist/. ./deploy/dist/
cp ./manifest.json ./deploy/manifest.json

cp ./offline.appcache ./deploy/offline.appcache
echo '' >> ./deploy/offline.appcache
echo "# $(date "+%Y-%m-%dT%H:%M:%SZ")" >> ./deploy/offline.appcache

cp ./index.html ./deploy/index.html
sed '$d' ./index.html | sed '$d' | sed '$d' | sed '$d' | sed '$d' > ./deploy/index.html
echo '  <script src="./dist/index.js"></script>' >> ./deploy/index.html
echo '</body>' >> ./deploy/index.html
echo '</html>' >> ./deploy/index.html

sed '1,2d' ./deploy/index.html > ./deploy/offline.html
echo $'<!doctype html>\n<html manifest="./offline.appcache">' | cat - ./deploy/offline.html > temp && mv temp ./deploy/offline.html
