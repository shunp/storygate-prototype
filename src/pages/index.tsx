import * as React from 'react'
import { AnyAction } from 'redux'
import { connect } from 'react-redux'
import { css } from '@emotion/core'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import { PersonService } from 'src/services/PersonService'

import { themes, DEFAULT_THEME } from 'src/themes'
import Header from 'src/components/Header/index'
import Caption from 'src/components/Person/Caption/index'
import PersonTabLayout from 'src/components/Person/PersonTabLayout'
import PersonContentLayout from 'src/components/Person/PersonContentLayout'
import Footer from 'src/components/Footer'
import { Person } from 'src/services/interfaces/Person'
import { State } from 'src/state'
import { applyTheme } from '../themes/utils'

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
  return (
    <>
      <div
        className="absolute w-full h-full"
        css={css`
          background-image: url('https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/443502378%2Fbackground.jpg?alt=media&token=d51ed645-6e89-4475-aef5-695efba575ba');
          height: 100%;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        `}
      >
        <div className="absolute w-full h-full bg-gradient-b-blue-pink-purple opacity-75" />
      </div>
      <div className="absolute w-full h-full">
        <div className="flex justify-center pt-10 pb-4">
          <div className="h-full text-white">Login</div>
        </div>
        <div className="border-white border-solid border-2 mx-4 lg:max-w-3xl lg:mx-auto" />
        <div className="mt-10 mx-6">
          <div
            className="h-full text-white text-lg font-bold"
            css={css`
              font-family: 'Lato', sans-serif;
            `}
          >
            世界初のオンラインコミュニティ
          </div>
          <div
            className="h-full text-white text-lg font-bold"
            css={css`
              font-family: 'Lato', sans-serif;
            `}
          >
            特化型ソーシャルメディア
          </div>
          <div
            className="h-full text-white text-5xl"
            css={css`
              font-family: livermore-script-atf, sans-serif;
              font-style: normal;
              font-weight: 400;
            `}
          >
            StoryGate
          </div>
        </div>
        <div className="mx-6">
          <div className="text-white">メールアドレス</div>
          <div className="border-b border-white">
            <input
              type="email"
              placeholder="abc@example.com"
              className="border-none bg-transparent h-10 px-5 rounded-lg text-lg focus:outline-none"
            />
          </div>
          <div className="text-white">パスワード</div>
          <div className="border-b border-white">
            <input
              type="password"
              placeholder="********"
              className="border-none bg-transparent h-10 px-5 rounded-lg text-lg focus:outline-none"
            />
          </div>
        </div>
        <div className="flex justify-center flex-col">
          <div className="flex justify-center">
            <button type="button" className="rounded-full text-purple-c1 bg-white py-2 px-10 m-2 w-full">
              ログイン
            </button>
          </div>
          <div className="flex justify-center text-white">または</div>
          <div className="flex justify-center">
            <button type="button" className="rounded-full text-white bg-blue-800 py-2 px-10 m-2 w-full">
              Facebookでログイン
            </button>
          </div>
        </div>
        <div className="border-white border-solid border-2 mx-4 lg:max-w-3xl lg:mx-auto" />
        <div className="flex justify-center text-white mt-10">アカウントをお持ちでないですか？</div>
      </div>
    </>
  )
}

export default IndexPage
