export interface Person {
  readonly pageId: string
  readonly ownerUid: string
  readonly lastLoginFromNow: string
  readonly points: number
  name: string
  title: string
  location: string
  img?: string
  introduction: string
}
