import * as firebase from '@firebase/testing'
import { readFileSync } from 'fs'

const DEFAULT_PROJECT_ID = 'story-gate-dev-test'

class FireStoreTestUtil {
  constructor(path: string, authedUid: string, projectId = DEFAULT_PROJECT_ID) {
    const auth = { uid: authedUid }
    this.adminFireStore = firebase.initializeAdminApp({ projectId }).firestore()
    this.authedFirestore = firebase.initializeTestApp({ projectId, auth }).firestore()
    this.unauthedFirestore = firebase.initializeTestApp({ projectId }).firestore()
    this.path = path
    this.projectId = projectId
  }

  adminFireStore: firebase.firestore.Firestore

  authedFirestore: firebase.firestore.Firestore

  unauthedFirestore: firebase.firestore.Firestore

  path: string

  projectId: string

  init = async () => {
    await firebase
      .loadFirestoreRules({
        projectId: this.projectId,
        rules: readFileSync('./firestore.rules', 'utf8')
      })
      .catch(err => console.error(err))
  }

  createDocumentByAdmin = async (id: string, document = {}) =>
    this.adminFireStore
      .collection(this.path)
      .doc(id)
      .set(document)
      .catch(err => console.error(err))

  getDocument = (id: string) => this.authedFirestore.collection(this.path).doc(id)

  getCollection = () => this.authedFirestore.collection(this.path)

  getDocumentWithoutAuth = (id: string) => this.unauthedFirestore.collection(this.path).doc(id)

  getCollectionWithoutAuth = () => this.unauthedFirestore.collection(this.path)
}

export default FireStoreTestUtil
