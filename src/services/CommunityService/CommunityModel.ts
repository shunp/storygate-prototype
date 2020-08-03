import { Community } from 'src/services/interfaces/Community'
import { Person } from 'src/services/interfaces/Person'

export class CommunityModel implements Community {
  constructor(private _name: string, private _introduction: string, private _members: Person[], private _backgroundImg: string) {}

  static empty(): Community {
    return new CommunityModel('', '', [], '')
  }

  get name(): string {
    return this._name
  }

  get introduction(): string {
    return this._introduction
  }

  get members(): Person[] {
    return this._members
  }

  get backgroundImg(): string {
    return this._backgroundImg
  }

  get numOfMembers(): number {
    return this._members.length
  }
}
