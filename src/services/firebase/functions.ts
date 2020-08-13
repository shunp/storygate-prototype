import { functions } from './firebase'

export const findOpenGraph = async (url: string) => {
  const findOpenGraphFn = functions.httpsCallable('findOpenGraph')
  const result = await findOpenGraphFn({ url })
  return result.data
}

export const lastLogin = async (uid: string) => {
  const lastLoginFn = functions.httpsCallable('lastLogin')
  const result = await lastLoginFn({ uid })
  return result.data.lastLogin
}
