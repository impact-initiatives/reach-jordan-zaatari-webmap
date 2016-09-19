#! /bin/bash

BUCKET=$1
echo "Copy dist files to $BUCKET"
aws s3 cp --recursive dist/ s3://$BUCKET/jordan-zaatari-health-map
