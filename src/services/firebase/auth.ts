import { auth, facebookProvider } from './firebase'

export interface UserCredential {
  uid: string
}

const toCredential = async (credential: firebase.auth.UserCredential) => {
  const { user } = credential
  if (!user?.uid) {
    throw new Error('Failed to sign in.')
  }
  return {
    uid: user.uid
  }
}
export const signInWithFacebook = async () => {
  const result = await auth.signInWithPopup(facebookProvider)
  return toCredential(result)
}
export const signUpWithFacebook = async () => {
  const result = await auth.signInWithPopup(facebookProvider)
  return result
}

export const signOut = () => auth.signOut()

export const currentUser = () => auth.currentUser
