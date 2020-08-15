import { GroupCaption } from 'src/services/interfaces/GroupCaption'
import { GroupCaptionData } from 'src/services/firebase/firestore'

export class GroupCaptionModel implements GroupCaption {
  constructor(readonly pageId: string, readonly name: string, readonly introduction: string, readonly backgroundImg: string) {}

  static empty(): GroupCaption {
    return new GroupCaptionModel('', '', '', '')
  }

  static fromCaption(caption: GroupCaptionData): GroupCaption {
    const { pageId, name, introduction, backgroundImg } = caption
    return new GroupCaptionModel(pageId, name, introduction, backgroundImg)
  }
}
