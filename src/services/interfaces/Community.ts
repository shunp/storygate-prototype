import { Person } from './Person'
import { CommunityCaption } from './CommunityCaption'
import { GroupReference } from './GroupCaption'
import { Announcement } from './Announcement'

export type Community = CommunityCaption & {
  readonly members: Person[]
  readonly groups: GroupReference[]
  readonly numOfMembers: number
  readonly latestAnnoucement?: Announcement
  readonly joined: (uid: string) => boolean
}
