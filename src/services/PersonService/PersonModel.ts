import { Person } from 'src/services/interfaces/Person'
import { PersonCaption } from '../firebase/firestore'

export class PersonModel implements Person {
  constructor(
    private _pageId: string,
    private _name: string,
    private _title: string,
    private _introduction: string,
    private _location: string,
    private _pic: string
  ) {}

  static empty(): Person {
    return new PersonModel('', '', '', '', '', '')
  }

  static fromContext(pageId: string, name: string, title: string, introduction: string, location: string): Person {
    return new PersonModel(pageId, name, title, introduction, location, '')
  }

  static fromCaption(caption: PersonCaption): Person {
    const { pageId, name, title, introduction, location, img } = caption
    return new PersonModel(pageId, name, title, introduction, location, img)
  }

  get pageId(): string {
    return this._pageId
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
