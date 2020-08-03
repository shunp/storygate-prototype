import { Community } from 'src/services/interfaces/Community'
import { fetchCommunityCaption, addCommunityMember } from 'src/services/firebase/firestore'
import { PersonModel } from 'src/services/PersonService/PersonModel'
import { CommunityModel } from './CommunityModel'

class Service {
  emptyCommunity = (): Community => {
    return CommunityModel.empty()
  }

  fromContext = (name: string, introduction: string): Community => {
    return new CommunityModel(name, introduction, [], '')
  }

  fetchById = async (id: string): Promise<Community> => {
    const CommunityCaption = await fetchCommunityCaption(id)
    const { name, introduction, members, backgroundImg } = CommunityCaption
    return new CommunityModel(
      name,
      introduction,
      members.map(member => PersonModel.fromCaption(member)),
      backgroundImg
    )
  }

  join = async (id: string, uid: string) => {
    addCommunityMember(id, uid)
  }
}

export const CommunityService = new Service()
