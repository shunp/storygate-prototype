import { firestore } from './firebase'

export interface PageCaption {
  pageId: string
  ownerUid: string
  username: string
  title: string
  introduction: string
  location: string
  picture: string
}

export const fetchPageCaption = async (pageId: string): Promise<PageCaption> => {
  const docRef = firestore.collection('v2/proto/pageCaptions').doc(pageId)
  const doc = await docRef.get()
  const pageCaption = doc.data() || {}
  return {
    pageId: pageCaption.pageId || '',
    ownerUid: pageCaption.ownerUid || '',
    username: pageCaption.username || '',
    title: pageCaption.title || '',
    introduction: pageCaption.introduction || '',
    location: pageCaption.location || '',
    picture: pageCaption.picture || ''
  }
}
