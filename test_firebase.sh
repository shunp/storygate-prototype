#!/bin/bash

usage() {
  echo '$1:TARGET=firestore / cloudfunction(TBA)'
  echo 'ex: ./test_firebase firestore'
}

if [[ $# -lt 1 ]];then
  usage
  exit 1
fi

TARGET=$1
if [[ ${TARGET} = 'firestore' ]];then
  firebase emulators:exec --only firestore 'yarn jest firestore --runInBand --detectOpenHandles'
fi
