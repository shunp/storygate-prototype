import * as React from 'react'

import Facebook from 'assets/facebook.svg'
import { AuthService } from 'src/services/AuthService'
import { toggleLoginModal } from 'src/components/Auth/modal/utils'
import { LoginUser } from 'src/services/interfaces/Auth'

const onClickLogin = async (login: (loginUser: LoginUser) => void) => {
  const loginUser = await AuthService.login()
  if (!loginUser) {
    return
  }

  login(loginUser)
  toggleLoginModal()
}

const FacebookLoginButton = ({ login }) => {
  return (
    <button type="button" className="px-2 bg-transparent text-indigo-500" onClick={async () => onClickLogin(login)}>
      <Facebook className="focus:outline-none w-12 h-12" />
    </button>
  )
}
export default FacebookLoginButton
