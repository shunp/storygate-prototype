import { fetchPersonContent } from '../firebase/firestore'
import { Content } from '../interfaces/Content'

class Service {
  fetchById = async (id: string): Promise<Content> => {
    const personContent = await fetchPersonContent(id)
    return personContent
  }
}

export const ContentService = new Service()
