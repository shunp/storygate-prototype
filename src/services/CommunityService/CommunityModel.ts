import { Group } from 'src/services/interfaces/Group'
import { Community } from 'src/services/interfaces/Community'
import { Person } from 'src/services/interfaces/Person'
import { CommunityCaption } from '../firebase/firestore'

export class CommunityModel implements Community {
  constructor(
    readonly name: string,
    readonly introduction: string,
    readonly backgroundImg: string,
    readonly members: Person[],
    readonly groups: Group[]
  ) {}

  static empty(): Community {
    return new CommunityModel('', '', '', [], [])
  }

  static frompCaption(caption: CommunityCaption, members: Person[], groups: Group[]): Community {
    const { name, introduction, backgroundImg } = caption
    return new CommunityModel(name, introduction, backgroundImg, members, groups)
  }

  get numOfMembers(): number {
    return this.members.length
  }
}
