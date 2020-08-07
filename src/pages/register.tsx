import * as React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { Background, Heading, Logo, RegisterTitleLine } from 'src/components/Auth/top'
import PageRoot from 'src/components/Root/PageRoot'
import SGText from 'src/components/SGText'

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

const FacebookSignupButton = () => {
  return (
    <button type="button" className="rounded-full bg-blue-800 py-2 px-10 m-2 w-full">
      <SGText className="text-white ">Facebookで登録</SGText>
    </button>
  )
}

const IndexPage = () => {
  const [invitation, setInvitation] = React.useState('')
  return (
    <PageRoot loading={false}>
      <Background>
        <div className="absolute w-full h-full">
          <RegisterTitleLine>
            <SGText className="text-white">Create Account</SGText>
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
              <FacebookSignupButton />
            </div>
          </div>
          <div className="border-white border-solid border-2 mx-4 mt-4 opacity-50 lg:max-w-3xl lg:mx-auto" />
          <div className="flex justify-center mt-10">
            <SGText className="text-white">アカウントをお持ちですか？</SGText>
            <Link to="/">
              <SGText className="text-white underline">ログイン</SGText>
            </Link>
          </div>
        </div>
      </Background>
    </PageRoot>
  )
}

export default IndexPage
