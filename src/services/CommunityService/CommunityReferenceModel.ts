import { CommunityReference } from 'src/services/interfaces/CommunityCaption'
import { CommunityCaptionModel } from './CommunityCaptionModel'
import { CommunityCaptionData } from '../firebase/firestore'

export class CommunityReferenceModel extends CommunityCaptionModel implements CommunityReference {
  constructor(
    readonly pageId: string,
    readonly name: string,
    readonly introduction: string,
    readonly backgroundImg: string,
    readonly members: string[],
    readonly groups: string[]
  ) {
    super(pageId, name, introduction, backgroundImg)
  }

  static empty(): CommunityReference {
    return new CommunityReferenceModel('', '', '', '', [], [])
  }

  static fromCaption(caption: CommunityCaptionData): CommunityReference {
    const { pageId, name, introduction, backgroundImg, members, groups } = caption
    return new CommunityReferenceModel(pageId, name, introduction, backgroundImg, members, groups)
  }

  get numOfMembers(): number {
    return this.members.length
  }
}
