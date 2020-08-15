import { Group } from 'src/services/interfaces/Group'
import { fetchGroupCaption } from 'src/services/firebase/firestore'
import { GroupModel } from './GroupModel'

class Service {
  emptyGroup = (): Group => {
    return GroupModel.empty()
  }

  fetchById = async (id: string): Promise<Group> => {
    const GroupCaption = await fetchGroupCaption(id)
    const { pageId, name, introduction, backgroundImg } = GroupCaption
    return new GroupModel(pageId, name, introduction, backgroundImg)
  }
}

export const GroupService = new Service()
