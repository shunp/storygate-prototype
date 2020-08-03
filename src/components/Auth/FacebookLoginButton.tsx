import * as React from 'react'

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
    <div className="flex flex-col w-full">
      <button type="button" className="bg-transparent p-2 " onClick={async () => onClickLogin(login)}>
        <div className="font-semibold italic bg-blue-800 text-white text-center py-2 shadow-lg text-lg">Facebookでログイン</div>
      </button>
    </div>
  )
}
export default FacebookLoginButton
