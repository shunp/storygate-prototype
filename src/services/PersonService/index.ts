import { uploadProfileImg } from 'src/services/firebase/storage'
import { Person } from 'src/services/interfaces/Person'
import { fetchPersonCaption, addPersonPage, updatePerson } from 'src/services/firebase/firestore'
import { lastLogin } from 'src/services/firebase/functions'
import { PersonModel } from './PersonModel'

class Service {
  emptyPerson = (): Person => {
    return PersonModel.empty()
  }

  fromContext = (pageId: string, ownerUid: string, name: string, title: string, introduction: string, location: string): Person => {
    return PersonModel.fromContext(pageId, ownerUid, '', name, title, introduction, location)
  }

  fetchById = async (id: string): Promise<Person> => {
    const personCaption = await fetchPersonCaption(id)
    return PersonModel.fromCaption(personCaption, await lastLogin(id))
  }

  addPage = async (pageId: string, ownerUid: string, name: string, img: string) => {
    await addPersonPage(pageId, ownerUid, name, img)
  }

  updateCaption = async (person: Person, newImg?: Blob) => {
    if (newImg) {
      person.img = await uploadProfileImg(person.pageId, newImg)
    }
    await updatePerson(person)
  }
}

export const PersonService = new Service()
