import { Group } from 'src/services/interfaces/Group'
import { fetchGroupCaption } from 'src/services/firebase/firestore'
import { GroupModel } from './GroupModel'

class Service {
  emptyGroup = (): Group => {
    return GroupModel.empty()
  }

  fromContext = (name: string, introduction: string): Group => {
    return new GroupModel(name, introduction, [], '')
  }

  fetchById = async (id: string): Promise<Group> => {
    const GroupCaption = await fetchGroupCaption(id)
    const { name, introduction, backgroundImg } = GroupCaption
    return new GroupModel(name, introduction, backgroundImg)
  }
}

export const GroupService = new Service()
