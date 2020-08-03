import * as React from 'react'
import { connect } from 'react-redux'
import { State } from 'src/state'
import { LoginUser } from 'src/services/interfaces/Auth'
import { publishLogin, publishLogout } from 'src/state/app'
import { AuthService } from 'src/services/AuthService'
import NavWrapper from './NavWrapper'
import LoginUserIcon from './LoginUserIcon'
import HeaderLogo from './HeaderLogo'
import TopMenuBase from '../TopMenu'
import ToggleLoginButton from './ToggleLoginButton'
import LoginModal from '../Auth/modal/LoginModal'

interface HeaderStates {
  loginUser: LoginUser
}
interface HeaderDispatch {
  login: (logingUser: LoginUser) => void
  logout: () => void
}
type HeaderProps = HeaderStates & HeaderDispatch
const HeaderBase: React.FC<HeaderProps> = ({ loginUser, login, logout, dispatch }) => {
  if (!loginUser.loggedIn) {
    const storedUser = AuthService.loadStoredUser()
    if (storedUser.loggedIn) {
      login(storedUser)
    }
  }
  return (
    <>
      <NavWrapper>
        <LoginUserIcon />
        <HeaderLogo />
        {loginUser.loggedIn ? (
          <>
            <button type="button" className="inline-block text-sm px-2 py-2 leading-none text-black border-white border rounded">
              ...
            </button>
            <TopMenuBase logout={logout} />
          </>
        ) : (
          <ToggleLoginButton />
        )}
      </NavWrapper>
      <LoginModal login={login} />
    </>
  )
}

export default connect<HeaderStates, HeaderDispatch, {}, State>(
  state => ({
    loginUser: state.app.loginUser
  }),
  dispatch => ({
    login: (loginUser: LoginUser) => dispatch(publishLogin(loginUser)),
    logout: () => dispatch(publishLogout())
  })
)(HeaderBase)
