import { uploadProfileImg } from 'src/services/firebase/storage'
import { Person } from 'src/services/interfaces/Person'
import {
  fetchPersonCaption,
  addPersonPage,
  updatePerson,
  updateLoginCount,
  fetchPoints,
  queryCommunityCaptionByPerson
} from 'src/services/firebase/firestore'
import { lastLogin } from 'src/services/firebase/functions'
import { CommunityReferenceModel } from 'src/services/CommunityService/CommunityReferenceModel'

import { PersonModel } from './PersonModel'

class Service {
  emptyPerson = (): Person => {
    return PersonModel.empty()
  }

  fetchById = async (id: string): Promise<Person> => {
    const personCaption = await fetchPersonCaption(id)
    const communities = await queryCommunityCaptionByPerson(id)
    return PersonModel.fromCaption(
      personCaption,
      await lastLogin(id),
      await fetchPoints(id),
      communities.map(community => CommunityReferenceModel.fromCaption(community))
    )
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
