import * as firebase from '@firebase/testing'
import Util from '../utils/firestore/util'

const TARGET = 'accounts'

describe(TARGET, () => {
  const authedUid = 'jest'
  const util = new Util(TARGET, authedUid)
  beforeAll(async () => {
    await util.init()
  })
  afterEach(async () => {
    await firebase.clearFirestoreData({ projectId: util.projectId })
  })
  afterAll(async () => {
    await Promise.all(firebase.apps().map(app => app.delete()))
  })

  const createAccountByAdmin = async (uid: string) => util.createDocumentByAdmin(uid)
  const getAccount = (uid: string) => util.getDocument(uid)

  test('Authed user can get own', async () => {
    createAccountByAdmin(authedUid)
    const account = getAccount(authedUid)
    await firebase.assertSucceeds(account.get())
  })
  test('Anyone cannot get the others', async () => {
    const anotherUid = 'mocha'
    createAccountByAdmin(anotherUid)
    const account = getAccount(anotherUid)
    await firebase.assertFails(account.get())
  })
  test('Authed user can create own', async () => {
    const account = getAccount(authedUid)
    await firebase.assertSucceeds(account.set({ createDatetime: new Date() }))
  })
  test('Anyone cannot list, create, update, delete', async () => {
    createAccountByAdmin(authedUid)
    const accounts = util.getCollection()
    await firebase.assertFails(accounts.get())

    const account = getAccount(authedUid)
    await firebase.assertFails(account.update({}))
    await firebase.assertFails(account.delete())
  })
})
