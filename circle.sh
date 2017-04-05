#! /bin/bash

BRANCH=$1

if [ $BRANCH = "master" ]; then
  BUCKET=$BUCKET_MASTER
  DISTRIBUTION=$DISTRIBUTION_MASTER
elif [ $BRANCH = "staging" ]; then
  BUCKET=$BUCKET_STAGING
  DISTRIBUTION=$DISTRIBUTION_STAGING
elif [ $BRANCH = "develop" ]; then
  BUCKET=$BUCKET_DEV
  DISTRIBUTION=$DISTRIBUTION_DEV
fi

aws s3 rm s3://$BUCKET --recursive

aws s3 cp --recursive ./dist/ s3://$BUCKET/
aws s3 cp ./dist/cache.manifest s3://$BUCKET/cache.manifest --content-type text/cache-manifest

aws configure set preview.cloudfront true
aws cloudfront create-invalidation \
  --distribution-id $DISTRIBUTION \
  --paths "/*"
