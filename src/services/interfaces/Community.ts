import { Person } from './Person'
import { CommunityCaption } from './CommunityCaption'
import { GroupReference } from './GroupCaption'

export type Community = CommunityCaption & {
  readonly members: Person[]
  readonly groups: GroupReference[]
  readonly numOfMembers: number
}
