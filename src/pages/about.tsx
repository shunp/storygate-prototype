import * as React from 'react'
import { Montserrat } from 'src/components/SGText'
import { css } from '@emotion/core'
import PageRoot from 'src/components/Root/PageRoot'
import Header from 'src/components/Map/Header'

const Recruit = () => {
  return (
    <PageRoot>
      <Header />
      <div
        className="absolute w-full"
        css={css`
          background-color: #212020;
          height: 100%;
        `}
      >
        <div className="flex justify-center items-center mt-16 mb-10">
          <Montserrat className="text-white text-3xl font-bold">StoryGateとは？</Montserrat>
        </div>
        <div className="flex justify-center items-center mx-5">
          <Montserrat className="text-gray-500 text-center">
            StoryGateは世界初のオンラインコミュニティ専用ソーシャルツールです。パブリックのSNSとプライベートSNSは公開できる情報に大きな隔たりがあるはずですが、現在の主要なプラットフォームでは基本的に全てパブリック専用での利用が想定されています。私たちは個人のより深い情報を同じコミュニティの人と共有しあえるコミュニティ運営の機会を提供していきます。
          </Montserrat>
        </div>
        <div className="flex justify-center items-center mt-10 mb-10">
          <Montserrat className="text-white text-3xl font-bold">運営会社</Montserrat>
        </div>
        <div>
          <div className="flex justify-start items-center">
            <Montserrat className="text-white rounded-full bg-gradient-t-blue-pink-purple py-1 px-6 ml-10 mr-4 text-sm">商　号</Montserrat>
            <Montserrat className="text-white font-bold">Asymmatrix OÜ</Montserrat>
          </div>
          <div className="flex justify-start items-center mt-3">
            <Montserrat className="text-white rounded-full bg-gradient-t-blue-pink-purple py-1 px-6 ml-10 mr-4 text-sm">資本金</Montserrat>
            <Montserrat className="text-white font-bold">5,000,000円</Montserrat>
          </div>
          <div className="flex justify-start items-center mt-3">
            <Montserrat className="text-white rounded-full bg-gradient-t-blue-pink-purple py-1 px-6 ml-10 mr-4 text-sm">代表者</Montserrat>
            <Montserrat className="text-white font-bold">小池駿平</Montserrat>
          </div>
          <div className="flex justify-start items-center mt-3">
            <Montserrat className="text-white rounded-full bg-gradient-t-blue-pink-purple py-1 px-6 ml-10 mr-4 text-sm">設　立</Montserrat>
            <Montserrat className="text-white font-bold">2020年7月22日</Montserrat>
          </div>
          <div className="flex justify-start items-center mt-3">
            <Montserrat className="text-white rounded-full bg-gradient-t-blue-pink-purple py-1 px-6 ml-10 mr-4 text-sm">連絡先</Montserrat>
            <Montserrat className="text-white font-bold">contact@storygate.info</Montserrat>
          </div>
          <div className="border-white border-solid border mx-4 mt-10 opacity-50 lg:max-w-3xl lg:mx-auto" />
          <div className="flex justify-center">
            <Montserrat className="text-white text-sm font-bold opacity-75 mt-4">© 2020 Asymmatrix OÜ</Montserrat>
          </div>
        </div>
      </div>
    </PageRoot>
  )
}
export default Recruit
