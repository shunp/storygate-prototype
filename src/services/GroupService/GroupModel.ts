import { Group } from 'src/services/interfaces/Group'
import { Person } from 'src/services/interfaces/Person'
import { GroupCaption } from '../firebase/firestore'

export class GroupModel implements Group {
  constructor(
    readonly pageId: string,
    readonly name: string,
    readonly introduction: string,
    readonly backgroundImg: string,
    readonly members: Person[] = []
  ) {}

  static empty(): Group {
    return new GroupModel('', '', '', '', [])
  }

  static fromCaption(caption: GroupCaption): Group {
    const { pageId, name, introduction, backgroundImg } = caption
    return new GroupModel(pageId, name, introduction, backgroundImg)
  }

  get numOfMembers(): number {
    return this.members.length
  }
}
