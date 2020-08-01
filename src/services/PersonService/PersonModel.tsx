import { Person } from 'src/services/interfaces/Person'

export class PersonModel implements Person {
  constructor(
    private _name: string,
    private _title: string,
    private _location: string,
    private _pic: string,
    private _introduction: string
  ) {}

  static empty(): Person {
    return new PersonModel('', '', '', '', '')
  }

  get name(): string {
    return this._name
  }

  get title(): string {
    return this._title
  }

  get location(): string {
    return this._location
  }

  get pic(): string {
    return this._pic
  }

  get introduction(): string {
    return this._introduction
  }
}
