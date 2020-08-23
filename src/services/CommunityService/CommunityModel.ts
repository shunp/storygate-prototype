import { Community } from 'src/services/interfaces/Community'
import { Person } from 'src/services/interfaces/Person'
import { CommunityCaptionModel } from './CommunityCaptionModel'
import { CommunityCaptionData } from '../firebase/firestore'
import { GroupReference } from '../interfaces/GroupCaption'
import { Announcement } from '../interfaces/Announcement'

export class CommunityModel extends CommunityCaptionModel implements Community {
  constructor(
    readonly pageId: string,
    readonly name: string,
    readonly introduction: string,
    readonly backgroundImg: string,
    readonly groups: GroupReference[],
    readonly numOfMembers: number,
    readonly members: Person[],
    readonly latestAnnoucement?: Announcement
  ) {
    super(pageId, name, introduction, backgroundImg, numOfMembers)
  }

  static empty(): Community {
    return new CommunityModel('', '', '', '', [], 0, [])
  }

  static fromCaption(
    caption: CommunityCaptionData,
    members: Person[] = [],
    groups: GroupReference[] = [],
    latestAnnouncement?: Announcement
  ): Community {
    const { pageId, name, introduction, backgroundImg, numOfMembers } = caption
    return new CommunityModel(pageId, name, introduction, backgroundImg, groups, numOfMembers, members, latestAnnouncement)
  }

  joined = (uid: string) => this.members.some(member => member.pageId === uid)
}
