/* eslint-disable import/no-mutable-exports */
// @ts-nocheck
import firebase from 'gatsby-plugin-firebase'

let storage: firebase.storage.Storage = {}
let firestore: firebase.firestore.Firestore = {}
let functions: firebase.functions.Functions = {}
let auth: firebase.auth.Auth = {}
let facebookProvider: firebase.auth.FacebookAuthProvider = {}
if (typeof window !== 'undefined') {
  storage = firebase.storage()
  firestore = firebase.firestore()
  functions = firebase.functions()
  auth = firebase.auth()
  auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  facebookProvider = new firebase.auth.FacebookAuthProvider()
}

export { storage, firestore, functions, auth, facebookProvider }
