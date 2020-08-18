import * as React from 'react'
import { connect } from 'react-redux'
import { State } from 'src/state'
import { useLocation } from '@reach/router'
import { LoginUser } from 'src/services/interfaces/Auth'
import { PersonService } from 'src/services/PersonService'

import { loginAction, logoutAction } from 'src/state/app'
import { AuthService } from 'src/services/AuthService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import NavWrapper from './NavWrapper'
import LoginUserIcon from './LoginUserIcon'
import HeaderLogo from './HeaderLogo'
import TopMenuBase from '../TopMenu'
import ToggleLoginButton from './ToggleLoginButton'
import LoginModal from '../Auth/modal/LoginModal'

interface HeaderMenuProps {
  loggedIn: boolean
  editable: boolean
  logout: () => void
}
const HeaderMenu: React.FC<HeaderMenuProps> = ({ loggedIn, editable, logout }) => {
  if (!loggedIn) {
    return <ToggleLoginButton />
  }
  if (editable) {
    return (
      <>
        <button type="button" className="inline-block text-sm px-2 py-2 leading-none text-white text-lg border-none border rounded">
          <FontAwesomeIcon icon={faBars} size="lg" className="text-white" />
        </button>
        <TopMenuBase logout={logout} />
      </>
    )
  }
  return <></>
}
interface HeaderStates {
  loginUser: LoginUser
}
interface HeaderDispatch {
  login: (logingUser: LoginUser) => void
  logout: () => void
}

type HeaderProps = HeaderStates & HeaderDispatch
const HeaderBase: React.FC<HeaderProps> = ({ loginUser, login, logout }) => {
  const location = useLocation()
  const [icon, setIcon] = React.useState('')
  const [editable, setEditable] = React.useState(false)
  React.useEffect(() => {
    setEditable(loginUser.editablePage(location.pathname))
  }, [location, loginUser])
  if (!loginUser.loggedIn) {
    const storedUser = AuthService.loadStoredUser()
    if (storedUser.loggedIn) {
      login(storedUser)
      return <></>
    }
  }
  if (loginUser.loggedIn) {
    PersonService.fetchById(loginUser.uid).then(fetchedPerson => setIcon(fetchedPerson.img || ''))
  }
  return (
    <>
      <NavWrapper>
        <LoginUserIcon pageId={loginUser.uid} icon={icon} />
        {/* <HeaderLogo /> */}
        <HeaderMenu loggedIn={loginUser.loggedIn} editable={editable} logout={logout} />
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
    login: (loginUser: LoginUser) => dispatch(loginAction(loginUser)),
    logout: () => logoutAction().then(action => dispatch(action))
  })
)(HeaderBase)
