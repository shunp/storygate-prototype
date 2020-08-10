import * as React from 'react'
import { connect } from 'react-redux'
import { css } from '@emotion/core'
import { State } from 'src/state'
import { loginAction } from 'src/state/app'

import { Link, navigate } from 'gatsby'
import { Background, Heading, Logo, RegisterTitleLine } from 'src/components/Auth/top'
import PageRoot from 'src/components/Root/PageRoot'
import { Noto } from 'src/components/SGText'
import { AccountService } from 'src/services/AccountService'
import { AuthService } from 'src/services/AuthService'
import { LoginUser } from 'src/services/interfaces/Auth'
import { CommunityService } from 'src/services/CommunityService'
import { PersonService } from 'src/services/PersonService'
import { LoginUserModel } from 'src/services/AuthService/LoginUserModel'

interface HeaderStates {
  loginUser: LoginUser
}
interface HeaderDispatch {
  login: (logingUser: LoginUser) => void
}
const invitationSignIn = async (invitationCode: string, login: (loginUser: LoginUser) => void) => {
  const user = await AuthService.signUp()
  if (!user) {
    return
  }
  // FIXME move to cloud functions
  const invitation = await AccountService.acceptInvitation(invitationCode)
  await CommunityService.join(invitation.hostCommunity, user.uid)
  await PersonService.addPage(user.uid, user.uid, user.name, user.img)
  const loginUser = LoginUserModel.fromUserCredential(user)
  login(loginUser)
  navigate(`/persons/${loginUser.uid}`)
}
const InvitationCode = ({ invitation, setInvitation }) => {
  return (
    <>
      <div className="text-white text-xs mt-2">招待コード</div>
      <div className="border-b border-white">
        <input
          type="password"
          placeholder="********"
          className="border-none bg-transparent h-8 px-3 w-full rounded-lg text-lg focus:outline-none"
          value={invitation}
          onChange={e => setInvitation(e.target.value)}
        />
      </div>
      <div className="text-white text-xs mt-2">
        新規ユーザは招待コードまたは招待URLが必要です。招待コードをお持ちの方はこちらに入力の上Facebookボタンを押してください。
      </div>
    </>
  )
}

const FacebookSignupButton = ({ onClick }) => {
  return (
    <button type="button" className="rounded-full bg-blue-800 py-2 px-10 m-2 w-full" onClick={onClick}>
      <Noto className="text-white ">Facebookで登録</Noto>
    </button>
  )
}

const IndexPage = ({ login }) => {
  const [invitation, setInvitation] = React.useState('')
  return (
    <PageRoot loading={false}>
      <Background>
        <div className="absolute w-full h-full">
          <RegisterTitleLine>
            <Noto className="text-white">Create Account</Noto>
          </RegisterTitleLine>
          <div className="mt-10 mx-6">
            <Heading>世界初のオンラインコミュニティ</Heading>
            <Heading>特化型ソーシャルメディア</Heading>
            <Logo>StoryGate</Logo>
          </div>
          <div className="mx-6 mt-10">
            <InvitationCode invitation={invitation} setInvitation={setInvitation} />
          </div>
          <div className="flex justify-center flex-col">
            <div className="flex justify-center">
              <FacebookSignupButton onClick={() => invitationSignIn(invitation.trim(), login)} />
            </div>
          </div>
          <div className="border-white border-solid border-2 mx-4 mt-4 opacity-50 lg:max-w-3xl lg:mx-auto" />
          <div className="flex justify-center mt-10">
            <Noto className="text-white">アカウントをお持ちですか？</Noto>
            <Link to="/">
              <Noto className="text-white underline">ログイン</Noto>
            </Link>
          </div>
        </div>
      </Background>
    </PageRoot>
  )
}

export default connect<HeaderStates, HeaderDispatch, {}, State>(
  state => ({
    loginUser: state.app.loginUser
  }),
  dispatch => ({
    login: (loginUser: LoginUser) => dispatch(loginAction(loginUser))
  })
)(IndexPage)
