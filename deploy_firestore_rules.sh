#!/bin/bash

usage() {
  echo '$1:BRANCH=develop / master'
  echo 'ex: ./deploy_firestore_rules.sh develop'
}

if [[ $# -lt 1 ]];then
  usage
  exit 1
fi

BRANCH=$1

if [[ ${BRANCH} = 'master' ]]; then
  PROJECT='story-gate'
elif [[ ${BRANCH} = 'develop' ]]; then
  PROJECT='story-gate-dev'
else
  usage
  exit 1
fi
firebase use ${PROJECT}

firebase emulators:exec --only firestore 'yarn jest firestore'
if [[ $? != 0 ]]; then
  echo "test failed."
  exit 1
fi

firebase deploy --only firestore:rules
