import { auth } from './admin'

export const getUser = async (uid: string) =>
  auth.getUser(uid).catch(error => console.error('Error fetching user data: %s, error: %o', uid, error))
