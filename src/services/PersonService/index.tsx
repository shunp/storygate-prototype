import { Person, PersonService } from 'src/services/interfaces/Person'
import { fetchPersonCaption } from 'src/services/firebase/firestore'
import { PersonModel } from './PersonModel'

class Service implements PersonService {
  emptyPerson = (): Person => {
    return PersonModel.empty()
  }

  fromContext = (name: string, title: string, introduction: string, location: string): Person => {
    return new PersonModel(name, title, introduction, location, '')
  }

  fetchPersonById = async (id: string): Promise<Person> => {
    const personCaption = await fetchPersonCaption(id)
    const { name, title, introduction, location, img } = personCaption
    return new PersonModel(name, title, introduction, location, img)
  }
}

export const PersonServiceImpl = new Service()
