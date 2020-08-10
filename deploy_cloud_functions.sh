#!/bin/bash

usage() {
  echo '$1:BRANCH=develop / master'
  echo '$2:FUNCTION_NAME'
  echo 'ex: ./deploy_cloud_functions.sh develop ${FUNCTION_NAME}'
}

if [[ $# -lt 1 ]];then
  usage
  exit 1
fi

BRANCH=$1
FUNCTION_NAME=$2

if [[ ${BRANCH} = 'master' ]]; then
  PROJECT='story-gate'
elif [[ ${BRANCH} = 'develop' ]]; then
  PROJECT='story-gate-dev'
else
  usage
  exit 1
fi

firebase use ${PROJECT}

# update env vars
echo "BRANCH:${BRANCH}"
firebase functions:config:set buildconfig.branch=${BRANCH}

if [[ $# -gt 1 ]]; then
  firebase deploy --only functions:${FUNCTION_NAME}
else
  firebase deploy --only functions
fi
