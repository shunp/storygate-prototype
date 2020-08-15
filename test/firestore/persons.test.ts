import * as firebase from '@firebase/testing'
import Util from '../utils/firestore/util'

const TARGET = 'persons'

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

  const createPersonsByAdmin = (pageId: string, ownerUid: string) => util.createDocumentByAdmin(pageId, { ownerUid })
  const getPersonsWithoutAuth = () => util.getCollection()
  const getPersonWithoutAuth = (pageId: string) => util.getDocumentWithoutAuth(pageId)
  const getPerson = (pageId: string) => util.getDocument(pageId)

  test('Everyone can get, list', async () => {
    const pageId = 'pageId'
    createPersonsByAdmin(pageId, authedUid)
    const persons = getPersonsWithoutAuth()
    await firebase.assertSucceeds(persons.get())
    const pageCaption = getPersonWithoutAuth(pageId)
    await firebase.assertSucceeds(pageCaption.get())
  })
  test('Owner can update', async () => {
    const pageId = 'pageId'
    createPersonsByAdmin(pageId, authedUid)
    const person = getPerson(pageId)
    await firebase.assertSucceeds(person.update({ ownerUid: authedUid, sections: [], profileImgUrl: '', bgImgUrl: '', themeColor: '' }))
  })
  test('Cannnot change owner', async () => {
    const pageId = 'pageId'
    createPersonsByAdmin(pageId, authedUid)
    const person = getPerson(pageId)
    await firebase.assertFails(person.update({ ownerUid: 'anotherUid' }))
    await firebase.assertFails(person.update({ ownerUid: authedUid, another: '' }))
  })
  test('Not owner cannot update', async () => {
    const pageId = 'pageId'
    createPersonsByAdmin(pageId, 'anotherUid')
    const person = getPerson(pageId)
    await firebase.assertFails(person.update({}))
  })
  test('Anyone cannot create, delete', async () => {
    const pageId = 'pageId'
    const person = getPerson(pageId)
    await firebase.assertFails(person.set({}))
    createPersonsByAdmin(pageId, authedUid)
    await firebase.assertFails(person.delete())
  })
})
