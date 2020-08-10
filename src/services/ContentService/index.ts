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
    const personContent = await fetchPersonContent(id)
    return Object.keys(personContent).length ? personContent : this.emptyContent()
  }

  updatePersonContent = async (pageId: string, content: Content) => {
    await updatePersonContent(pageId, content)
  }
}

export const ContentService = new Service()