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
export interface Community {
  communityId: string
  name: string
  members: PersonCaption[]
  introduction: string
  backGroundImg: string
}

export const fetchPersonCaption = async (pageId: string): Promise<PersonCaption> => {
  const docRef = firestore.collection('v2/proto/personCaptions').doc(pageId)
  const doc = await docRef.get()
  const personCaption = doc.data() || {}
  return {
    pageId: personCaption.pageId || '',
    ownerUid: personCaption.ownerUid || '',
    name: personCaption.name || '',
    title: personCaption.title || '',
    introduction: personCaption.introduction || '',
    location: personCaption.location || '',
    img: personCaption.img || ''
  }
}
