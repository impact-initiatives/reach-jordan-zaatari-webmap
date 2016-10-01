#! /bin/bash

BUCKET=$1

aws s3 rm s3://$BUCKET --recursive

aws s3 cp index-dist.html s3://$BUCKET/index.html
aws s3 cp service-worker.js s3://$BUCKET/service-worker.js
aws s3 cp --recursive dist/ s3://$BUCKET/dist
aws s3 cp --recursive node_modules/mapbox-gl/dist/ s3://$BUCKET/node_modules/mapbox-gl/dist
aws s3 cp --recursive resources/ s3://$BUCKET/resources

aws configure set preview.cloudfront true
aws cloudfront create-invalidation \
  --distribution-id $AWS_CLOUDFRONT_DISTRIBUTION_ID \
  --paths "/*"
