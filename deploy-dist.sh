#! /bin/bash

rm -rf ./deploy/
mkdir -p ./deploy/node_modules/mapbox-gl/

cp ./index-dist.html ./deploy/index.html
cp ./offline.html ./deploy/offline.html
cp ./offline.appcache ./deploy/offline.appcache
cp -a ./node_modules/normalize.css/. ./deploy/node_modules/normalize.css/
cp -a ./node_modules/mapbox-gl/dist/. ./deploy/node_modules/mapbox-gl/dist/
cp -a ./resources/. ./deploy/resources/
cp -a ./dist/. ./deploy/dist/

echo "" >> ./deploy/offline.appcache
echo "# $(date "+%Y-%m-%dT%H:%M:%SZ")" >> ./deploy/offline.appcache
