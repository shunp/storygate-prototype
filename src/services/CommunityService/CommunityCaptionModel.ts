import { CommunityCaption } from 'src/services/interfaces/CommunityCaption'
import { CommunityCaptionData } from '../firebase/firestore'

export class CommunityCaptionModel implements CommunityCaption {
  constructor(
    readonly pageId: string,
    readonly name: string,
    readonly introduction: string,
    readonly backgroundImg: string,
    readonly numOfMembers: number
  ) {}

  static empty(): CommunityCaption {
    return new CommunityCaptionModel('', '', '', '', 0)
  }

  static fromCaption(caption: CommunityCaptionData): CommunityCaption {
    const { pageId, name, introduction, backgroundImg, numOfMembers } = caption
    return new CommunityCaptionModel(pageId, name, introduction, backgroundImg, numOfMembers)
  }
}
