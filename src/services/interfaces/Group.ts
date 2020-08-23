import { GroupCaption } from './GroupCaption'
import { Person } from './Person'
import { CommunityReference } from './CommunityCaption'
import { Announcement } from './Announcement'

export type Group = GroupCaption & {
  readonly members: Person[]
  readonly numOfMembers: number
  readonly community?: CommunityReference
  readonly latestAnnoucement?: Announcement
  readonly joined: (uid: string) => boolean
}
