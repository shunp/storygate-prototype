import * as React from 'react'
import { Montserrat } from 'src/components/SGText'
import { css } from '@emotion/core'
import PageRoot from 'src/components/Root/PageRoot'
import Header from 'src/components/Map/Header'

const HeadLine = ({ children }) => {
  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <Montserrat className="text-white text-2xl font-bold">{children}</Montserrat>
      </div>
      <div
        className="border-solid border-2 mx-16 mt-2 mb-10 lg:max-w-3xl lg:mx-auto"
        css={css`
          border-image: linear-gradient(45deg, rgba(84, 66, 214), rgba(150, 34, 210), rgba(204, 44, 183)) 20%;
        `}
      />
    </>
  )
}

const AboutStoryGateSection = () => {
  return (
    <>
      <HeadLine>StoryGateとは</HeadLine>
      <div className="flex justify-center items-center mx-10">
        <Montserrat className="text-gray-300 text-center text-sm">
          StoryGateは世界初のオンラインコミュニティ専用ソーシャルツールです。パブリックのSNSとプライベートSNSは公開できる情報に大きな隔たりがあるはずですが、現在の主要なプラットフォームでは基本的に全てパブリック専用での利用が想定されています。私たちは個人のより深い情報を同じコミュニティの人と共有しあえるコミュニティ運営の機会を提供していきます。
        </Montserrat>
      </div>
    </>
  )
}

const AboutTeamSection = () => {
  return (
    <>
      <HeadLine>運営チーム</HeadLine>
      <div className="flex justify-center items-center mx-10">
        <Montserrat className="text-gray-300 text-center text-sm">StoryGateの開発/運営は以下のメンバーによって行われています。</Montserrat>
      </div>
    </>
  )
}

const AboutCompany = () => {
  return (
    <>
      <HeadLine>運営会社</HeadLine>
      <div>
        <div className="flex justify-start items-center">
          <Montserrat className="text-white rounded-full bg-gradient-t-blue-pink-purple py-1 px-6 ml-10 mr-4 text-sm">商　号</Montserrat>
          <Montserrat className="text-white font-semibold">Asymmatrix OÜ</Montserrat>
        </div>
        <div className="flex justify-start items-center mt-3">
          <Montserrat className="text-white rounded-full bg-gradient-t-blue-pink-purple py-1 px-6 ml-10 mr-4 text-sm">資本金</Montserrat>
          <Montserrat className="text-white font-semibold">5,000,000円</Montserrat>
        </div>
        <div className="flex justify-start items-center mt-3">
          <Montserrat className="text-white rounded-full bg-gradient-t-blue-pink-purple py-1 px-6 ml-10 mr-4 text-sm">代表者</Montserrat>
          <Montserrat className="text-white font-semibold">小池駿平</Montserrat>
        </div>
        <div className="flex justify-start items-center mt-3">
          <Montserrat className="text-white rounded-full bg-gradient-t-blue-pink-purple py-1 px-6 ml-10 mr-4 text-sm">設　立</Montserrat>
          <Montserrat className="text-white font-semibold">2020年7月22日</Montserrat>
        </div>
        <div className="flex justify-start items-center mt-3">
          <Montserrat className="text-white rounded-full bg-gradient-t-blue-pink-purple py-1 px-6 ml-10 mr-4 text-sm">連絡先</Montserrat>
          <Montserrat className="text-white font-semibold">contact@storygate.info</Montserrat>
        </div>
        <div className="border-white border-solid border mx-4 mt-10 opacity-50 lg:max-w-3xl lg:mx-auto" />
        <div className="flex justify-center">
          <Montserrat className="text-white text-sm font-bold opacity-75 mt-4 mb-10">© 2020 Asymmatrix OÜ</Montserrat>
        </div>
      </div>
    </>
  )
}

const AboutPage = () => {
  return (
    <PageRoot>
      <Header />
      <div
        className="absolute"
        css={css`
          background-color: #212020;
          height: auto;
        `}
      >
        <div className="pt-10" />
        <AboutStoryGateSection />
        <AboutTeamSection />
        <AboutCompany />
      </div>
    </PageRoot>
  )
}
export default AboutPage
