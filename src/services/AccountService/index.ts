import { fetchInvitation } from 'src/services/firebase/firestore'

class Service {
  acceptInvitation = async (invitationId: string) => {
    return fetchInvitation(invitationId)
  }
}

export const AccountService = new Service()
