import { Person } from 'src/services/interfaces/Person'
import { PersonCaption } from '../firebase/firestore'

export class PersonModel implements Person {
  constructor(
    readonly pageId: string,
    readonly name: string,
    readonly title: string,
    readonly introduction: string,
    readonly location: string,
    readonly pic: string
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
}
