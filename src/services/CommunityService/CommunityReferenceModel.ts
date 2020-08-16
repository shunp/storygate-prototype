import { CommunityReference } from 'src/services/interfaces/CommunityCaption'
import { CommunityCaptionModel } from './CommunityCaptionModel'
import { CommunityCaptionData } from '../firebase/firestore'

export class CommunityReferenceModel extends CommunityCaptionModel implements CommunityReference {
  constructor(
    readonly pageId: string,
    readonly name: string,
    readonly introduction: string,
    readonly backgroundImg: string,
    readonly groups: string[],
    readonly numOfMembers: number
  ) {
    super(pageId, name, introduction, backgroundImg, numOfMembers)
  }

  static empty(): CommunityReference {
    return new CommunityReferenceModel('', '', '', '', [], 0)
  }

  static fromCaption(caption: CommunityCaptionData): CommunityReference {
    const { pageId, name, introduction, backgroundImg, groups, numOfMembers } = caption
    return new CommunityReferenceModel(pageId, name, introduction, backgroundImg, groups, numOfMembers)
  }
}
