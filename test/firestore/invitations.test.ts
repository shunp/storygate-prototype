import * as firebase from '@firebase/testing'
import Util from '../utils/firestore/util'

const TARGET = 'invitations'

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

  const createInvitationByAdmin = async (invitationId: string, invitation?: any) => util.createDocumentByAdmin(invitationId, invitation)
  const getInvitationWithoutAuth = (inviatationId: string) => util.getDocumentWithoutAuth(inviatationId)
  const getInvitation = (inviatationId: string) => util.getDocument(inviatationId)
  const getInvitations = () => util.getCollection()

  const invitationId = 'invitationId'
  let acceptance: any
  const validAcceptance = {
    inviteeUid: authedUid,
    updateDatetime: Date.UTC(2020, 1, 2)
  }
  beforeEach(async () => {
    acceptance = { ...validAcceptance }
    await createInvitationByAdmin(invitationId, { hostUid: 'host', updateDatetime: Date.UTC(2020, 1, 1) })
  })
  test('Everyone can get', async () => {
    createInvitationByAdmin(invitationId)
    const invitation = getInvitationWithoutAuth(invitationId)
    await firebase.assertSucceeds(invitation.get())
  })
  test('Authed user can create with only defined key', async () => {
    const newInvitation = getInvitation('newInvitation')
    await firebase.assertSucceeds(newInvitation.set({ hostUid: 'host', createDatetime: 'a', updateDatetime: 'b', expireDatetime: 'c' }))
  })
  test('Cannot create with any other', async () => {
    const newInvitation = getInvitation('newInvitation')
    await firebase.assertFails(newInvitation.set({ another: 'd' }))
  })
  test('Everyone not has an account can accept(update with own uid)', async () => {
    const invitation = getInvitation(invitationId)
    await firebase.assertSucceeds(invitation.update(validAcceptance))
  })
  test('Request can change only inviteeUid, updateDatetime', async () => {
    const invitation = getInvitation(invitationId)
    acceptance.hostUid = 'invalid'
    await firebase.assertFails(invitation.update(acceptance))
  })
  test('InviteeUid must be requestor uid', async () => {
    const invitation = getInvitation(invitationId)
    acceptance.inviteeUid = 'anotherUid'
    await firebase.assertFails(invitation.update(acceptance))
  })
  test('Update date time must be newer', async () => {
    const invitation = getInvitation(invitationId)
    acceptance.updateDatetime = Date.UTC(1970, 1, 1)
    await firebase.assertFails(invitation.update(acceptance))
  })
  test('Creator can list own', async () => {
    const invitations = getInvitations()
    await firebase.assertSucceeds(invitations.where('hostUid', '==', authedUid).get())
  })
  test('The others cannot list', async () => {
    const invitations = getInvitations()
    await firebase.assertFails(invitations.where('hostUid', '==', 'anotheUid').get())
  })
  test('Anyone cannot list with any other query', async () => {
    const invitations = getInvitations()
    await firebase.assertFails(invitations.where('createDatetime', '>', new Date()).get())
  })
  test('Anyone cannot update, delete', async () => {
    const invitation = getInvitation(invitationId)
    await firebase.assertFails(invitation.update({}))
    await firebase.assertFails(invitation.delete())
  })
})
