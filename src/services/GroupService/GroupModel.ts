import { Group } from 'src/services/interfaces/Group'
import { Person } from 'src/services/interfaces/Person'
import { GroupCaptionData } from 'src/services/firebase/firestore'
import { GroupCaptionModel } from './GroupCaptionModel'
import { CommunityReference } from '../interfaces/CommunityCaption'

export class GroupModel extends GroupCaptionModel implements Group {
  constructor(
    readonly pageId: string,
    readonly name: string,
    readonly introduction: string,
    readonly backgroundImg: string,
    readonly members: Person[] = [],
    readonly community?: CommunityReference
  ) {
    super(pageId, name, introduction, backgroundImg)
  }

  static empty(): Group {
    return new GroupModel('', '', '', '', [])
  }

  static fromCaption(caption: GroupCaptionData, members: Person[] = [], community = undefined): Group {
    const { pageId, name, introduction, backgroundImg } = caption
    return new GroupModel(pageId, name, introduction, backgroundImg, members, community)
  }

  get numOfMembers(): number {
    return this.members.length
  }

  joined = (uid: string) => this.members.some(member => member.pageId === uid)
}
