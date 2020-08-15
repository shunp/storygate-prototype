import { GroupCaption } from './GroupCaption'
import { Person } from './Person'
import { CommunityReference } from './CommunityCaption'

export type Group = GroupCaption & {
  readonly members: Person[]
  readonly community?: CommunityReference
  readonly numOfMembers: number
  readonly joined: (uid: string) => boolean
}
