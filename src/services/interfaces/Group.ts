import { GroupCaption } from './GroupCaption'
import { Person } from './Person'

export type Group = GroupCaption & {
  readonly members: Person[]
  readonly numOfMembers: number
}
