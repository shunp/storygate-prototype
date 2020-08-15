export interface CommunityCaption {
  readonly pageId: string
  readonly name: string
  readonly introduction: string
  readonly backgroundImg: string
}

export type CommunityReference = CommunityCaption & {
  readonly members: string[]
  readonly groups: string[]
  readonly numOfMembers: number
}
