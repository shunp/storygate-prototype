import firebase from 'gatsby-plugin-firebase'
import { Person } from 'src/services/interfaces/Person'
import dayjs from 'dayjs'
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
export interface CommunityCaptionData {
  pageId: string
  name: string
  introduction: string
  backgroundImg: string
  members: string[]
  groups: string[]
}
export interface GroupCaptionData {
  pageId: string
  name: string
  introduction: string
  backgroundImg: string
  members: string[]
}
export interface Invitation {
  id: string
  hostCommunity: string
}
export interface LoginCount {
  count: number
  lastUpdate: firebase.firestore.Timestamp
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
export const fetchGroupCaption = async (pageId: string): Promise<GroupCaptionData> => {
  const docRef = firestore.collection('v2/proto/groupCaptions').doc(pageId)
  const doc = await docRef.get()
  const groupCaption = doc.data() || {}
  return {
    pageId: doc.id || '',
    name: groupCaption.name || '',
    introduction: groupCaption.introduction || '',
    backgroundImg: groupCaption.backgroundImg || '',
    members: groupCaption.members || []
  }
}

export const fetchFromMemberRef = (members: string[]): Promise<PersonCaption[]> => {
  return Promise.all(members.map(async memberId => fetchPersonCaption(memberId)))
}
export const fetchFromGroupRef = (groups: string[]): Promise<GroupCaptionData[]> => {
  return Promise.all(groups.map(async groupId => fetchGroupCaption(groupId)))
}
export const fetchCommunityCaption = async (pageId: string): Promise<CommunityCaptionData> => {
  const docRef = firestore.collection('v2/proto/communityCaptions').doc(pageId)
  const doc = await docRef.get()
  const communityCaption = doc.data() || {}
  return {
    pageId: doc.id || '',
    name: communityCaption.name || '',
    introduction: communityCaption.introduction || '',
    backgroundImg: communityCaption.backgroundImg || '',
    members: communityCaption.members || [],
    groups: communityCaption.groups || []
  }
}
export const queryCommunityCaptionByPerson = async (personId: string): Promise<CommunityCaptionData[]> => {
  const collectionRef = firestore.collection('v2/proto/communityCaptions')
  const communities = await collectionRef.where('members', 'array-contains', personId).get()
  const communityCaptions: CommunityCaptionData[] = []
  communities.forEach(community => {
    const communityCaption = community.data()
    communityCaptions.push({
      pageId: community.id || '',
      name: communityCaption.name || '',
      introduction: communityCaption.introduction || '',
      backgroundImg: communityCaption.backgroundImg || '',
      members: communityCaption.members || [],
      groups: communityCaption.groups || []
    })
  })
  return communityCaptions
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
    .set(
      {
        ownerUid,
        name,
        img
      },
      { merge: true }
    )
    .catch(err => console.error(err))
}

export const updatePerson = async (person: Person) => {
  const docRef = firestore.collection('v2/proto/personCaptions').doc(person.pageId)
  const update = { ...person }
  delete update.pageId
  delete update.lastLogin
  await docRef.update(update).catch(err => console.error(err))
}

export const fetchPersonContent = async (pageId: string): Promise<Content> => {
  const docRef = firestore.collection('v2/proto/personContents').doc(pageId)
  const doc = await docRef.get()
  const personContent = doc.data() || {}
  return {
    portfolio: personContent.portfolio || { contents: [] },
    story: personContent.story || { contents: [] }
  }
}
export const updatePersonContent = async (pageId: string, personContent: Content) => {
  const docRef = firestore.collection('v2/proto/personContents').doc(pageId)
  await docRef.set(personContent, { merge: true }).catch(err => console.error(err))
}

export const fetchPoints = async (uid: string) => {
  const docRef = firestore.collection('v2/proto/metrics/persons/loginCount').doc(uid)
  const doc = await docRef.get()
  const loginCount = doc.data() as LoginCount | undefined
  return loginCount?.count || 0
}
export const updateLoginCount = async (uid: string) => {
  const docRef = firestore.collection('v2/proto/metrics/persons/loginCount').doc(uid)
  const doc = await docRef.get()
  const loginCount = doc.data() as LoginCount | undefined
  if (loginCount) {
    if (dayjs().day() === dayjs(loginCount.lastUpdate.toDate()).day()) {
      return
    }
  }
  await docRef.set({
    count: firebase.firestore.FieldValue.increment(1),
    lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
  })
}
