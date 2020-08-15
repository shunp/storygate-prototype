import * as firebase from '@firebase/testing'
import Util from '../utils/firestore/util'

const TARGET = 'inquiries'

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

  const getInquiriesWithoutAuth = () => util.getCollectionWithoutAuth()
  const getInquiries = () => util.getCollection()
  const getInquiry = (inquiryId: string) => util.getDocument(inquiryId)
  const createInquiryByAdmin = (inquiryId: string) => util.createDocumentByAdmin(inquiryId)

  test('Everyone can create', async () => {
    await firebase.assertSucceeds(getInquiriesWithoutAuth().add({}))
  })
  test('Anyone cannot list, get, update, delete', async () => {
    const inquiries = getInquiries()
    await firebase.assertFails(inquiries.get())

    const inquiryId = 'inquiryId'
    createInquiryByAdmin(inquiryId)
    const inquiry = getInquiry(inquiryId)
    await firebase.assertFails(inquiry.get())
    await firebase.assertFails(inquiry.update({}))
    await firebase.assertFails(inquiry.delete())
  })
})
