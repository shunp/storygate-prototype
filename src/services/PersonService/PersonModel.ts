import { Person } from 'src/services/interfaces/Person'
import { PersonCaption } from 'src/services/firebase/firestore'
import { fromNow } from 'src/utils/date'

export class PersonModel implements Person {
  constructor(
    readonly pageId: string,
    readonly ownerUid: string,
    readonly lastLogin: string,
    readonly points: number,
    readonly name: string,
    readonly title: string,
    readonly introduction: string,
    readonly location: string,
    readonly img: string
  ) {}

  static empty(): Person {
    return new PersonModel('', '', '', 0, '', '', '', '', '')
  }

  static fromCaption(caption: PersonCaption, lastLogin = '', points = 0): Person {
    const { pageId, ownerUid, name, title, introduction, location, img } = caption
    return new PersonModel(pageId, ownerUid, lastLogin, points, name, title, introduction, location, img)
  }

  get lastLoginFromNow() {
    return this.lastLogin ? fromNow(this.lastLogin) : ''
  }
}
