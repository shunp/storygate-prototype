/* eslint-disable import/no-mutable-exports */
// @ts-nocheck
import firebase from 'gatsby-plugin-firebase'

let firestore: firebase.firestore.Firestore = {}
let auth: firebase.auth.Auth = {}
let facebookProvider: firebase.auth.FacebookAuthProvider = {}
if (typeof window !== 'undefined') {
  firestore = firebase.firestore()
  firestore.settings({ timestampsInSnapshots: true })
  auth = firebase.auth()
  auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  facebookProvider = new firebase.auth.FacebookAuthProvider()
}

export { firestore, auth, facebookProvider }
