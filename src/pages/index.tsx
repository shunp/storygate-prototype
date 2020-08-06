import * as React from 'react'
import { css } from '@emotion/core'
import Img from 'gatsby-image'
import { useStaticQuery, graphql, Link } from 'gatsby'

const Background = ({ bgImg }) => {
  return (
    <div
      className="absolute w-full h-full"
      css={css`
        background-image: url(${bgImg});
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      `}
    >
      <div className="absolute w-full h-full bg-gradient-b-blue-pink-purple opacity-75" />
    </div>
  )
}

const TitleLine = () => {
  return (
    <>
      <div className="flex justify-center pt-10 pb-4">
        <div className="h-full text-white">Login</div>
      </div>
      <div className="border-white border-solid border-2 mx-4 opacity-50 lg:max-w-3xl lg:mx-auto" />
    </>
  )
}

const Title = ({ children }) => {
  return (
    <div
      className="h-full text-white text-lg font-bold my-1"
      css={css`
        font-family: 'Lato', sans-serif;
      `}
    >
      {children}
    </div>
  )
}

const Logo = ({ children }) => {
  return (
    <div
      className="h-full text-white text-5xl font-serif italic my-2"
      css={css`
        /* font-family: livermore-script-atf, sans-serif; */
        font-style: italic;
        font-weight: 400;
      `}
    >
      {children}
    </div>
  )
}

const MailAddress = () => {
  return (
    <>
      <div className="text-white text-xs">メールアドレス</div>
      <div className="border-b border-white">
        <input
          type="email"
          placeholder="abc@example.com"
          className="border-none bg-transparent h-8 px-3 w-full rounded-lg text-lg focus:outline-none"
        />
      </div>
    </>
  )
}

const Password = () => {
  return (
    <>
      <div className="text-white text-xs mt-2">パスワード</div>
      <div className="border-b border-white">
        <input
          type="password"
          placeholder="********"
          className="border-none bg-transparent h-8 px-3 w-full rounded-lg text-lg focus:outline-none"
        />
      </div>
    </>
  )
}

const MailLoginButton = () => {
  return (
    <button type="button" className="rounded-full text-purple-c1 bg-white py-2 px-10 m-2 w-full">
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
  const url = `https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/443502378%2Fbackground.jpg?alt=media&token=d51ed645-6e89-4475-aef5-695efba575ba`
  return (
    <>
      <Background bgImg={url} />
      <div className="absolute w-full h-full">
        <TitleLine />
        <div className="mt-20 mx-6">
          <Title>世界初のオンラインコミュニティ</Title>
          <Title>特化型ソーシャルメディア</Title>
          <Logo>StoryGate</Logo>
        </div>
        <div className="mx-6 mt-10">
          <MailAddress />
          <Password />
        </div>
        <div className="flex justify-center flex-col">
          <div className="flex justify-center">
            <MailLoginButton />
          </div>
          <div className="flex justify-center text-white">または</div>
          <div className="flex justify-center">
            <FacebookLoginButton />
          </div>
        </div>
        <div className="border-white border-solid border-2 mx-4 mt-4 lg:max-w-3xl lg:mx-auto" />
        <div className="flex justify-center mt-10">
          <span className="text-white">アカウントをお持ちでないですか？</span>
          <Link to="/account" className="text-white underline">
            新規登録
          </Link>
        </div>
      </div>
    </>
  )
}

export default IndexPage
