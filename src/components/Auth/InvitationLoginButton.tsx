import * as React from 'react'
import { AccountService } from 'src/services/AccountService'
import { AuthService } from 'src/services/AuthService'
import { toggleLoginModal } from 'src/components/Auth/modal/utils'
import { LoginUser } from 'src/services/interfaces/Auth'
import { CommunityService } from 'src/services/CommunityService'
import { PersonService } from 'src/services/PersonService'
import { LoginUserModel } from 'src/services/AuthService/LoginUserModel'

const invitationSignIn = async (invitationCode: string, login: (loginUser: LoginUser) => void) => {
  const user = await AuthService.signUp()
  if (!user) {
    return
  }
  // FIXME move to cloud functions
  const invitation = await AccountService.acceptInvitation(invitationCode)
  CommunityService.join(invitation.hostCommunity, user.uid)
  PersonService.addPage(user.uid, user.name, user.img)
  login(LoginUserModel.fromUserCredential(user))
  location.reload()
  toggleLoginModal()
}

interface InvitationLoginButtonProps {
  login: (loginUser: LoginUser) => void
}
const InvitationLoginButton: React.FC<InvitationLoginButtonProps> = ({ login }) => {
  const [invitationCode, setInvitationCode] = React.useState('')

  return (
    <div className="flex justify-center items-center">
      <input
        className="appearance-none bg-transparent border-none w-1/2 text-gray-600 m-3 py-1 px-2 leading-tight focus:outline-none underline text-lg lowercase"
        type="text"
        value={invitationCode}
        placeholder="INVITATION CODE"
        onChange={e => setInvitationCode(e.target.value)}
      />
      <button
        type="button"
        className="text-gray-400 bg-transparent text-sm py-2 px-6 border border-gray-400 rounded"
        onClick={() => invitationSignIn(invitationCode, login)}
        disabled={!invitationCode}
      >
        Sign Up
      </button>
    </div>
  )
}

export default InvitationLoginButton
