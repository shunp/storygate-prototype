import { Community } from 'src/services/interfaces/Community'
import { Person } from 'src/services/interfaces/Person'
import { CommunityCaptionModel } from './CommunityCaptionModel'
import { CommunityCaptionData } from '../firebase/firestore'
import { GroupReference } from '../interfaces/GroupCaption'

export class CommunityModel extends CommunityCaptionModel implements Community {
  constructor(
    readonly pageId: string,
    readonly name: string,
    readonly introduction: string,
    readonly backgroundImg: string,
    readonly groups: GroupReference[],
    readonly numOfMembers: number,
    readonly members: Person[]
  ) {
    super(pageId, name, introduction, backgroundImg, numOfMembers)
  }

  static empty(): Community {
    return new CommunityModel('', '', '', '', [], 0, [])
  }

  static fromCaption(caption: CommunityCaptionData, members: Person[] = [], groups: GroupReference[] = []): Community {
    const { pageId, name, introduction, backgroundImg, numOfMembers } = caption
    return new CommunityModel(pageId, name, introduction, backgroundImg, groups, numOfMembers, members)
  }
}
