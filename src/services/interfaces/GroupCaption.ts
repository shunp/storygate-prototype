export interface GroupCaption {
  readonly pageId: string
  readonly name: string
  readonly introduction: string
  readonly backgroundImg: string
  readonly joined: (uid: string) => boolean
}

export type GroupReference = GroupCaption & {
  readonly members: string[]
  readonly numOfMembers: number
}
