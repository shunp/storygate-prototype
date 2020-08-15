import { Community } from 'src/services/interfaces/Community'
import { fetchCommunityCaption, addCommunityMember } from 'src/services/firebase/firestore'
import { PersonModel } from 'src/services/PersonService/PersonModel'
import { GroupModel } from 'src/services/GroupService/GroupModel'
import { CommunityModel } from './CommunityModel'

class Service {
  emptyCommunity = (): Community => {
    return CommunityModel.empty()
  }

  fetchById = async (id: string): Promise<Community> => {
    const communityCaption = await fetchCommunityCaption(id)
    const { members, groups } = communityCaption
    return CommunityModel.frompCaption(
      communityCaption,
      members.map(member => PersonModel.fromCaption(member)),
      groups.map(group => GroupModel.fromCaption(group))
    )
  }

  join = async (id: string, uid: string) => {
    await addCommunityMember(id, uid)
  }
}

export const CommunityService = new Service()
