export interface CommunityCaption {
  readonly pageId: string
  readonly name: string
  readonly introduction: string
  readonly backgroundImg: string
  readonly numOfMembers: number
}

export type CommunityReference = CommunityCaption & {
  readonly groups: string[]
}
