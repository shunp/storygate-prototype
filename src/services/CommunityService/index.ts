import { Community } from 'src/services/interfaces/Community'
import {
  fetchCommunityCaption,
  addCommunityMember,
  fetchFromGroupRef,
  fetchFromMemberRef,
  createNewGroupInCommunity,
  updateGroup,
  fetchCommunityMembers,
  fetchPersonCaption,
  updateCommunityAnnouncement,
  fetchLatestCommunityAnnoucement
} from 'src/services/firebase/firestore'
import { PersonModel } from 'src/services/PersonService/PersonModel'

import dayjs from 'dayjs'
import { uploadGroupImg } from '../firebase/storage'

import { CommunityModel } from './CommunityModel'
import { GroupReferenceModel } from '../GroupService/GroupReferenceModel'

class Service {
  emptyCommunity = (): Community => {
    return CommunityModel.empty()
  }

  fetchById = async (id: string): Promise<Community> => {
    const communityCaption = await fetchCommunityCaption(id)
    const communityMembersRef = await fetchCommunityMembers(id)
    const members = await fetchFromMemberRef(communityMembersRef)
    const groups = await fetchFromGroupRef(communityCaption.groups)
    const announcementData = await fetchLatestCommunityAnnoucement(id)
    const latestAnnouncement = announcementData
      ? {
          authorName: announcementData.authorName,
          message: announcementData.message,
          createdAt: dayjs(announcementData.createdAt)
        }
      : undefined
    return CommunityModel.fromCaption(
      communityCaption,
      members.map(member => PersonModel.fromCaption(member)),
      groups.map(group => GroupReferenceModel.fromCaption(group)),
      latestAnnouncement
    )
  }

  join = async (id: string, uid: string) => {
    await addCommunityMember(id, uid)
  }

  createNewGroup = async (id: string, uid: string, name: string, introduction: string, backgroundImg?: Blob) => {
    const groupId = await createNewGroupInCommunity(id, uid, name, introduction)
    if (!backgroundImg) {
      return
    }
    const imgUrl = await uploadGroupImg(groupId, backgroundImg)
    await updateGroup(groupId, name, introduction, imgUrl)
  }

  updateAnnouncement = async (communityId: string, uid: string, message: string) => {
    const person = await fetchPersonCaption(uid)
    await updateCommunityAnnouncement(communityId, person.name, message)
  }
}

export const CommunityService = new Service()
