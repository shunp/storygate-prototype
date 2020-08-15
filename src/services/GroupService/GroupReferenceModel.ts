import { GroupCaptionData } from 'src/services/firebase/firestore'
import { GroupReference } from 'src/services/interfaces/GroupCaption'
import { GroupCaptionModel } from './GroupCaptionModel'

export class GroupReferenceModel extends GroupCaptionModel implements GroupReference {
  constructor(
    readonly pageId: string,
    readonly name: string,
    readonly introduction: string,
    readonly backgroundImg: string,
    readonly members: string[] = []
  ) {
    super(pageId, name, introduction, backgroundImg)
  }

  static empty(): GroupReference {
    return new GroupReferenceModel('', '', '', '', [])
  }

  static fromCaption(caption: GroupCaptionData): GroupReference {
    const { pageId, name, introduction, backgroundImg, members } = caption
    return new GroupReferenceModel(pageId, name, introduction, backgroundImg, members)
  }

  get numOfMembers(): number {
    return this.members.length
  }
}
