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
  await CommunityService.join(invitation.hostCommunity, user.uid)
  await PersonService.addPage(user.uid, user.name, user.img)
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
    <div className="flex justify-center items-center mt-2">
      <input
        type="text"
        className="border-2 border-gray-300 bg-white h-10 w-48 px-2 rounded text-md focus:outline-none"
        value={invitationCode}
        placeholder="Invitation Code..."
        onChange={e => setInvitationCode(e.target.value)}
      />
      <button
        type="button"
        className="text-white bg-blue-800 bg-transparent text-sm py-2 px-2 rounded"
        onClick={() => invitationSignIn(invitationCode.trim(), login)}
        disabled={!invitationCode}
      >
        SignUp
      </button>
    </div>
  )
}

export default InvitationLoginButton
