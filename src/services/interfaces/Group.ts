import { Person } from './Person'

export interface Group {
  readonly pageId: string
  readonly name: string
  readonly introduction: string
  readonly members?: Person[]
  readonly backgroundImg: string
  readonly numOfMembers: number
}
