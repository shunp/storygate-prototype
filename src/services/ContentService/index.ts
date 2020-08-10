import { updatePersonContent, fetchPersonContent } from '../firebase/firestore'

import { Content } from '../interfaces/Content'

class Service {
  emptyContent = (): Content => {
    return {
      portfolio: {
        contents: []
      },
      story: {
        contents: []
      }
    }
  }

  fetchPersonContentById = async (id: string): Promise<Content> => {
    return fetchPersonContent(id)
  }

  updatePersonContent = async (pageId: string, content: Content) => {
    await updatePersonContent(pageId, content)
  }
}

export const ContentService = new Service()
