import { functions } from './firebase'

export const findOpenGraph = async (url: string) => {
  const result = await functions.httpsCallable('findOpenGraph').call({ url }, { url })
  return result.data
}
