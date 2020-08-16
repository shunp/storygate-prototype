import { queryCommunityCaptionByPerson, updatePersonContent, fetchPersonContent, queryCommunityCaptionByIds } from '../firebase/firestore'

import { Content } from '../interfaces/Content'
import { CommunityReferenceModel } from '../CommunityService/CommunityReferenceModel'

class Service {
  emptyContent = (): Content => {
    return {
      portfolio: {
        contents: []
      },
      story: {
        contents: []
      },
      communities: [],
      openCommunities: []
    }
  }

  fetchPersonContentById = async (id: string, mySelf: boolean): Promise<Content> => {
    const content = await fetchPersonContent(id)
    const communities = mySelf ? await queryCommunityCaptionByPerson(id) : await queryCommunityCaptionByIds(content.openCommunities)
    return {
      ...content,
      communities: communities.map(community => CommunityReferenceModel.fromCaption(community))
    }
  }

  updatePersonContent = async (pageId: string, content: Content) => {
    await updatePersonContent(pageId, content)
  }
}

export const ContentService = new Service()
