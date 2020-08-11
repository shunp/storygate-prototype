import { https } from 'firebase-functions'
import { auth } from './firebase'

export const lastLogin = https.onCall(async (data, context) => {
  const { uid } = data
  console.log(uid)
  if (!uid) {
    return {
      error: 'invalid request.'
    }
  }
  const user = await auth.getUser(uid)
  if (!user) {
    return {
      error: `user not found. uid:${uid}`
    }
  }
  const { lastRefreshTime, lastSignInTime } = user.metadata
  return { lastLogin: lastRefreshTime || lastSignInTime }
})
