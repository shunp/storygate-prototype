import { Group } from './Group'
import { Person } from './Person'
import { CommunityCaption } from './CommunityCaption'

export type Community = CommunityCaption & {
  readonly members: Person[]
  readonly groups: Group[]
  readonly numOfMembers: number
}
