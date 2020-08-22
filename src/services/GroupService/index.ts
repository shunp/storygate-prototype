import { PersonModel } from 'src/services/PersonService/PersonModel'
import { Group } from 'src/services/interfaces/Group'
import {
  fetchGroupCaption,
  fetchFromMemberRef,
  addGroupMember,
  fetchCommunityCaption,
  fetchLatestGroupAnnoucement
} from 'src/services/firebase/firestore'

import dayjs from 'dayjs'
import { GroupModel } from './GroupModel'
import { CommunityReferenceModel } from '../CommunityService/CommunityReferenceModel'

class Service {
  emptyGroup = (): Group => {
    return GroupModel.empty()
  }

  fetchById = async (id: string): Promise<Group> => {
    const groupCaption = await fetchGroupCaption(id)
    const { pageId, name, introduction, backgroundImg, community } = groupCaption
    const membersData = await fetchFromMemberRef(groupCaption.members)
    const members = membersData.map(member => PersonModel.fromCaption(member))
    const announcementData = await fetchLatestGroupAnnoucement(id)
    const latestAnnouncement = announcementData
      ? {
          authorName: announcementData.authorName,
          message: announcementData.message,
          createdAt: dayjs(announcementData.createdAt)
        }
      : undefined
    return new GroupModel(
      pageId,
      name,
      introduction,
      backgroundImg,
      members,
      community ? CommunityReferenceModel.fromCaption(await fetchCommunityCaption(community)) : undefined,
      latestAnnouncement
    )
  }

  join = async (id: string, uid: string) => {
    await addGroupMember(id, uid)
  }
}

export const GroupService = new Service()
