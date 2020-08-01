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
