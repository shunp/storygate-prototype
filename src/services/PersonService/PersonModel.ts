import { Person } from 'src/services/interfaces/Person'
import { fromNow } from 'src/utils/date'
import { PersonCaption } from '../firebase/firestore'

export class PersonModel implements Person {
  constructor(
    readonly pageId: string,
    readonly ownerUid: string,
    readonly lastLogin: string,
    readonly name: string,
    readonly title: string,
    readonly introduction: string,
    readonly location: string,
    readonly img: string
  ) {}

  static empty(): Person {
    return new PersonModel('', '', '', '', '', '', '', '')
  }

  static fromContext(
    pageId: string,
    ownerUid: string,
    lastLogin: string,
    name: string,
    title: string,
    introduction: string,
    location: string
  ): Person {
    return new PersonModel(pageId, ownerUid, lastLogin, name, title, introduction, location, '')
  }

  static fromCaption(caption: PersonCaption, lastLogin = ''): Person {
    const { pageId, ownerUid, name, title, introduction, location, img } = caption
    return new PersonModel(pageId, ownerUid, lastLogin, name, title, introduction, location, img)
  }

  get lastLoginFromNow() {
    return this.lastLogin ? fromNow(this.lastLogin) : ''
  }
}
