import { Group } from 'src/services/interfaces/Group'
import { Community } from 'src/services/interfaces/Community'
import { Person } from 'src/services/interfaces/Person'
import { CommunityCaptionModel } from './CommunityCaptionModel'
import { CommunityCaptionData } from '../firebase/firestore'

export class CommunityModel extends CommunityCaptionModel implements Community {
  constructor(
    readonly pageId: string,
    readonly name: string,
    readonly introduction: string,
    readonly backgroundImg: string,
    readonly members: Person[],
    readonly groups: Group[]
  ) {
    super(pageId, name, introduction, backgroundImg)
  }

  static empty(): Community {
    return new CommunityModel('', '', '', '', [], [])
  }

  static fromCaption(caption: CommunityCaptionData, members: Person[] = [], groups: Group[] = []): Community {
    const { pageId, name, introduction, backgroundImg } = caption
    return new CommunityModel(pageId, name, introduction, backgroundImg, members, groups)
  }

  get numOfMembers(): number {
    return this.members.length
  }
}
