import { Person } from 'src/services/interfaces/Person'
import { fetchPersonCaption } from 'src/services/firebase/firestore'
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
}

export const PersonService = new Service()
