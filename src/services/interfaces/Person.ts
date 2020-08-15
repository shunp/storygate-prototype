import { CommunityReference } from './CommunityCaption'

export interface Person {
  readonly pageId: string
  readonly ownerUid: string
  readonly lastLoginFromNow: string
  readonly points: number
  readonly communities: CommunityReference[]
  name: string
  title: string
  location: string
  img?: string
  introduction: string
}
