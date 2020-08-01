/* eslint-disable import/no-mutable-exports */
// @ts-nocheck
import firebase from 'gatsby-plugin-firebase'

let firestore: firebase.firestore.Firestore = {}
if (typeof window !== 'undefined') {
  firestore = firebase.firestore()
  firestore.settings({ timestampsInSnapshots: true })
}

export { firestore }
