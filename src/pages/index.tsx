import * as React from 'react'
import { css } from '@emotion/core'
import Img from 'gatsby-image'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Background, LoginTitleLine, Heading, Logo } from 'src/components/Auth/top'

const MailAddress = ({ emailAddress, setEmailAddress }) => {
  return (
    <>
      <div className="text-white text-xs">メールアドレス</div>
      <div className="border-b border-white">
        <input
          type="email"
          placeholder="abc@example.com"
          className="border-none bg-transparent h-8 px-3 w-full rounded-lg text-lg focus:outline-none"
          value={emailAddress}
          onChange={e => setEmailAddress(e.target.value)}
        />
      </div>
    </>
  )
}

const Password = ({ password, setPassword }) => {
  return (
    <>
      <div className="text-white text-xs mt-2">パスワード</div>
      <div className="border-b border-white">
        <input
          type="password"
          placeholder="********"
          className="border-none bg-transparent h-8 px-3 w-full rounded-lg text-lg focus:outline-none"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
    </>
  )
}

const MailLoginButton = ({ emailAddress, password }) => {
  const loginByEmail = () => {
    console.log('emailAddress: ', emailAddress)
  }
  return (
    <button type="button" className="rounded-full text-purple-c1 bg-white py-2 px-10 m-2 w-full" onClick={loginByEmail}>
      ログイン
    </button>
  )
}

const FacebookLoginButton = () => {
  return (
    <button type="button" className="rounded-full text-white bg-blue-800 py-2 px-10 m-2 w-full">
      Facebookでログイン
    </button>
  )
}

const IndexPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     background: file(relativePath: { eq: "nishinosalon_background.jpg" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1000) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)
  // TODO: from GraphQL Schema
  const url = `https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/443502378%2Fbackground.jpg?alt=media&token=d51ed645-6e89-4475-aef5-695efba575ba`
  const [emailAddress, setEmailAddress] = React.useState('')
  const [password, setPassword] = React.useState('')
  return (
    <>
      <Background bgImg={url} />
      <div className="absolute w-full h-full">
        <LoginTitleLine />
        <div className="mt-20 mx-6">
          <Heading>世界初のオンラインコミュニティ</Heading>
          <Heading>特化型ソーシャルメディア</Heading>
          <Logo>StoryGate</Logo>
        </div>
        <div className="mx-6 mt-10">
          <MailAddress emailAddress={emailAddress} setEmailAddress={setEmailAddress} />
          <Password password={password} setPassword={setPassword} />
        </div>
        <div className="flex justify-center flex-col">
          <div className="flex justify-center">
            <MailLoginButton emailAddress={emailAddress} password={password} />
          </div>
          <div className="flex justify-center text-white">または</div>
          <div className="flex justify-center">
            <FacebookLoginButton />
          </div>
        </div>
        <div className="border-white border-solid border-2 mx-4 mt-4 lg:max-w-3xl lg:mx-auto" />
        <div className="flex justify-center mt-10">
          <span className="text-white">アカウントをお持ちでないですか？</span>
          <Link to="/register" className="text-white underline">
            新規登録
          </Link>
        </div>
      </div>
    </>
  )
}

export default IndexPage
