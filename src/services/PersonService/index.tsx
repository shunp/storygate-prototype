import { Person, PersonService } from 'src/services/interfaces/Person'
import { fetchPageCaption } from 'src/services/firebase/db'
import { PersonModel } from './PersonModel'

class Service implements PersonService {
  emptyPerson = (): Person => {
    return PersonModel.empty()
  }

  fetchPersonById = async (id: string): Promise<Person> => {
    const pageCaption = await fetchPageCaption(id)
    return new PersonModel(pageCaption.username, pageCaption.title, pageCaption.location, pageCaption.picture, pageCaption.introduction)
  }
}

export const PersonServiceImpl = new Service()
