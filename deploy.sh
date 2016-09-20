#! /bin/bash

BUCKET=$1
echo "Copy dist files to $BUCKET"
aws s3 cp --recursive dist/ s3://$BUCKET/jordan-zaatari-health-map
aws cloudfront get-invalidation --distribution-id $AWS_CLOUDFRONT_DISTRIBUTION_ID \
  --paths /jordan-zaatari-health-map/*
