import * as React from 'react'
import { Logo } from 'src/components/Auth/top'
import { connect } from 'react-redux'
import { LoginUser } from 'src/services/interfaces/Auth'
import { loginAction, logoutAction } from 'src/state/app'
import { AuthService } from 'src/services/AuthService'
import { PersonService } from 'src/services/PersonService'
import { State } from 'src/state'
import LoginUserIcon from '../Header/LoginUserIcon'
import NavWrapper from '../Header/NavWrapper'

interface MapHeaderStates {
  loginUser: LoginUser
}
interface MapHeaderDispatch {
  login: (logingUser: LoginUser) => void
  logout: () => void
}
type MapHeaderProps = MapHeaderStates & MapHeaderDispatch
const MapHeader: React.FC<MapHeaderProps> = ({ loginUser, login, logout }) => {
  const [icon, setIcon] = React.useState('')
  if (!loginUser.loggedIn) {
    const storedUser = AuthService.loadStoredUser()
    if (storedUser.loggedIn) {
      login(storedUser)
    }
  }
  if (loginUser.loggedIn) {
    PersonService.fetchById(loginUser.uid).then(fetchedPerson => setIcon(fetchedPerson.img || ''))
  }
  return (
    <>
      <div className="absolute w-full h-12 bg-white z-20" />
      <div className="absolute w-full h-12 bg-gradient-b-blue-pink z-20 opacity-85" />
      <NavWrapper>
        <LoginUserIcon pageId={loginUser.uid} icon={icon} login={login} />
        <Logo className="absolute w-full h-12 flex justify-center items-center text-white z-20 text-2xl">StoryGate</Logo>
      </NavWrapper>
    </>
  )
}

export default connect<MapHeaderStates, MapHeaderDispatch, {}, State>(
  state => ({
    loginUser: state.app.loginUser
  }),
  dispatch => ({
    login: (loginUser: LoginUser) => dispatch(loginAction(loginUser)),
    logout: async () => dispatch(await logoutAction())
  })
)(MapHeader)
