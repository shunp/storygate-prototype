import { PersonModel } from 'src/services/PersonService/PersonModel'
import { Group } from 'src/services/interfaces/Group'
import { fetchGroupCaption, fetchFromMemberRef } from 'src/services/firebase/firestore'

import { GroupModel } from './GroupModel'

class Service {
  emptyGroup = (): Group => {
    return GroupModel.empty()
  }

  fetchById = async (id: string): Promise<Group> => {
    const groupCaption = await fetchGroupCaption(id)
    const { pageId, name, introduction, backgroundImg } = groupCaption
    const members = await fetchFromMemberRef(groupCaption.members)
    return new GroupModel(
      pageId,
      name,
      introduction,
      backgroundImg,
      members.map(member => PersonModel.fromCaption(member))
    )
  }
}

export const GroupService = new Service()
