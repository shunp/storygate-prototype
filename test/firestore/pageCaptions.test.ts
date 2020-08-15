import * as firebase from '@firebase/testing'
import Util from '../utils/firestore/util'

const TARGET = 'pageCaptions'

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

  const createPageCaptionsByAdmin = (pageId: string, ownerUid: string) => util.createDocumentByAdmin(pageId, { ownerUid })
  const getPageCaptionsWithoutAuth = () => util.getCollectionWithoutAuth()
  const getPageCaptionWithoutAuth = (pageId: string) => util.getDocumentWithoutAuth(pageId)
  const getPageCaption = (pageId: string) => util.getDocument(pageId)

  test('Everyone can get, list', async () => {
    const pageId = 'pageId'
    createPageCaptionsByAdmin(pageId, authedUid)
    const pageCaptions = getPageCaptionsWithoutAuth()
    await firebase.assertSucceeds(pageCaptions.get())
    const pageCaption = getPageCaptionWithoutAuth(pageId)
    await firebase.assertSucceeds(pageCaption.get())
  })
  test('Owner can update only username/title/introduction', async () => {
    const pageId = 'pageId'
    createPageCaptionsByAdmin(pageId, authedUid)
    const pageCaption = getPageCaption(pageId)
    await firebase.assertSucceeds(pageCaption.update({ ownerUid: authedUid, username: '', title: '', introduction: '' }))
  })
  test('Cannot update any other fields', async () => {
    const pageId = 'pageId'
    createPageCaptionsByAdmin(pageId, authedUid)
    const pageCaption = getPageCaption(pageId)
    await firebase.assertFails(pageCaption.update({ ownerUid: 'anotherUid' }))
    await firebase.assertFails(pageCaption.update({ ownerUid: authedUid, another: '' }))
  })
  test('Not owner cannot update', async () => {
    const pageId = 'pageId'
    createPageCaptionsByAdmin(pageId, 'anotherUid')
    const pageCaption = getPageCaption(pageId)
    await firebase.assertFails(pageCaption.update({}))
  })
  test('Anyone cannot create, delete', async () => {
    const pageId = 'pageId'
    const pageCaption = getPageCaption(pageId)
    await firebase.assertFails(pageCaption.set({}))
    createPageCaptionsByAdmin(pageId, authedUid)
    await firebase.assertFails(pageCaption.delete())
  })
})
