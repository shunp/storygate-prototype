import { Person } from 'src/services/interfaces/Person'
import { fetchPersonCaption, addPersonPage, updatePerson } from 'src/services/firebase/firestore'
import { PersonModel } from './PersonModel'

class Service {
  emptyPerson = (): Person => {
    return PersonModel.empty()
  }

  fromContext = (pageId: string, name: string, title: string, introduction: string, location: string): Person => {
    return PersonModel.fromContext(pageId, name, title, introduction, location)
  }

  fetchById = async (id: string): Promise<Person> => {
    const personCaption = await fetchPersonCaption(id)
    return PersonModel.fromCaption(personCaption)
  }

  addPage = async (pageId: string, name: string, img: string) => {
    addPersonPage(pageId, name, img)
  }

  updateCaption = async (person: Person) => {
    await updatePerson(person)
  }
}

export const PersonService = new Service()
