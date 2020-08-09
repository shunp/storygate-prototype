import { storage } from './firebase'

export const uploadProfileImg = async (pageId: string, imgBlob: Blob) => {
  const uploadTaskSnapshot = await storage.ref(`${pageId}/profile.jpg`).put(imgBlob)
  const url = await uploadTaskSnapshot.ref.getDownloadURL()
  return url
}
