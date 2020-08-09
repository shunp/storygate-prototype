import { Person } from 'src/services/interfaces/Person'
import { Content } from '../interfaces/Content'
import { firestore } from './firebase'

export interface PersonCaption {
  pageId: string
  ownerUid: string
  name: string
  title: string
  introduction: string
  location: string
  img: string
}
export interface CommunityCaption {
  pageId: string
  name: string
  members: PersonCaption[]
  introduction: string
  backgroundImg: string
}
export interface Invitation {
  id: string
  hostCommunity: string
}

export const fetchPersonCaption = async (pageId: string): Promise<PersonCaption> => {
  const docRef = firestore.collection('v2/proto/personCaptions').doc(pageId)
  const doc = await docRef.get()
  const personCaption = doc.data() || {}
  return {
    pageId: doc.id || '',
    ownerUid: personCaption.ownerUid || '',
    name: personCaption.name || '',
    title: personCaption.title || '',
    introduction: personCaption.introduction || '',
    location: personCaption.location || '',
    img: personCaption.img || ''
  }
}
const fetchFromMemberRef = (members: string[]): Promise<PersonCaption[]> => {
  return Promise.all(members.map(async memberId => fetchPersonCaption(memberId)))
}
export const fetchCommunityCaption = async (pageId: string): Promise<CommunityCaption> => {
  const docRef = firestore.collection('v2/proto/communityCaptions').doc(pageId)
  const doc = await docRef.get()
  const communityCaption = doc.data() || {}
  const members = await fetchFromMemberRef(communityCaption.members)
  return {
    pageId: doc.id || '',
    name: communityCaption.name || '',
    introduction: communityCaption.introduction || '',
    members,
    backgroundImg: communityCaption.backgroundImg || ''
  }
}

export const fetchInvitation = async (invitationId: string): Promise<Invitation> => {
  const docRef = firestore.collection('v2/proto/invitations').doc(invitationId)
  const doc = await docRef.get()
  const invitation = doc.data()
  if (!invitation) {
    return Promise.reject(new Error('Invitaion not found.'))
  }
  return {
    id: doc.id,
    hostCommunity: invitation.hostCommunity
  }
}

export const addCommunityMember = async (communityId: string, uid: string) => {
  const docRef = firestore.collection('v2/proto/communityCaptions').doc(communityId)
  const doc = await docRef.get()
  const communityCaption = doc.data() || {}
  communityCaption.members.push(uid)
  await docRef.update(communityCaption).catch(err => console.error(err))
}

export const addPersonPage = async (pageId: string, ownerUid: string, name: string, img: string) => {
  await firestore
    .collection('v2/proto/personCaptions')
    .doc(pageId)
    .set({
      ownerUid,
      name,
      img
    })
    .catch(err => console.error(err))
}

export const updatePerson = async (person: Person) => {
  const docRef = firestore.collection('v2/proto/personCaptions').doc(person.pageId)
  const update = { ...person }
  delete update.pageId
  await docRef.update(update).catch(err => console.error(err))
}

export const fetchPersonContent = async (pageId: string): Promise<Content> => {
  const docRef = firestore.collection('v2/proto/personContents').doc(pageId)
  const doc = await docRef.get()
  const personContent = doc.data() || {}
  return {
    portfolio: personContent.portfolio
  }
}
export const updatePersonContent = async (pageId: string, personContent: Content) => {
  const docRef = firestore.collection('v2/proto/personContents').doc(pageId)
  await docRef.set(personContent, { merge: true }).catch(err => console.error(err))
}
