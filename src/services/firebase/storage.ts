import { storage } from './firebase'

export const uploadProfileImg = async (pageId: string, imgBlob: Blob) => {
  const uploadTaskSnapshot = await storage.ref(`${pageId}/profile.jpg`).put(imgBlob)
  const url = await uploadTaskSnapshot.ref.getDownloadURL()
  return url
}

export const uploadGroupImg = async (pageId: string, imgBlob: Blob) => {
  const uploadTaskSnapshot = await storage.ref(`groups/${pageId}/group.jpg`).put(imgBlob)
  const url = await uploadTaskSnapshot.ref.getDownloadURL()
  return url
}
