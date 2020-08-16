import { uploadProfileImg } from 'src/services/firebase/storage'
import { Person } from 'src/services/interfaces/Person'
import { fetchPersonCaption, addPersonPage, updatePerson, updateLoginCount, fetchPoints } from 'src/services/firebase/firestore'
import { lastLogin } from 'src/services/firebase/functions'

import { PersonModel } from './PersonModel'

class Service {
  emptyPerson = (): Person => {
    return PersonModel.empty()
  }

  fetchById = async (id: string): Promise<Person> => {
    const personCaption = await fetchPersonCaption(id)
    return PersonModel.fromCaption(personCaption, await lastLogin(id), await fetchPoints(id))
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

  incrementLoginCount = async (uid: string) => {
    await updateLoginCount(uid)
  }
}

export const PersonService = new Service()
