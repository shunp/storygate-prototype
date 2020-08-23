import * as React from 'react'
import { Montserrat } from 'src/components/SGText'
import { css } from '@emotion/core'
import PageRoot from 'src/components/Root/PageRoot'
import Header from 'src/components/Map/Header'
import { PersonService } from 'src/services/PersonService'
import 'src/styles/about-title.css'
import { useWindowSize } from 'src/utils/useWindowSize'
import { Link } from 'gatsby'

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

const LightMember = ({ name, to }) => {
  return (
    <Link to={`/persons/${to}`} className="w-1/2">
      <Montserrat className="relative font-semibold text-white text-md tracking-tight text-center mx-4">{name}</Montserrat>
    </Link>
  )
}

const CoreMember = ({ name, icon, to, width }) => {
  return (
    <Link to={`/persons/${to}`}>
      <div className="flex flex-col mx-4 w-20">
        <img src={icon} className="w-20 h-20 rounded-full border-4 z-20 bg-white" alt="" />
        <Montserrat className="relative font-semibold text-white text-md tracking-tight w-20 text-center">{name}</Montserrat>
      </div>
    </Link>
  )
}

const BoardMember = ({ name, title, icon, to, width, introduction }) => {
  return (
    <Link to={`/persons/${to}`}>
      <div className="flex justify-center mt-4 w-full">
        <img src={icon} className="w-40 h-40 rounded-full border-4 z-20 bg-white" alt="" />
      </div>
      <div className="flex flex-col w-full items-start">
        <div id="about">
          <div className="bar1" />
          <div className="bar2" />
          <div
            className="shadow"
            css={css`
              position: absolute;
              z-index: 20;
              width: 100px;
              height: 15px;
              top: 10px;
              left: ${width * 0.68}px;
              transform: skewX(-30deg);
              background-color: #5442d6;
            `}
          />
          <div
            className="text-white text-xs"
            css={css`
              position: absolute;
              z-index: 20;
              top: 9px;
              left: ${width * 0.73}px;
            `}
          >
            {title}
          </div>
          <div
            className="about-text-background bg-gradient-b-blue-purple"
            css={css`
              position: absolute;
              top: 25px;
              left: 80px;
              height: 55px;
              transform: skewX(-30deg);
              width: ${width * 0.68}px;
            `}
          />
        </div>
        <div className="w-full flex justify-center">
          <Montserrat
            className="relative font-bold text-white text-xl tracking-tight"
            css={css`
              top: 50%;
              bottom: -35px;
            `}
          >
            {name}
          </Montserrat>
        </div>
        <div className="w-full flex justify-center mt-10 mb-20">
          <Montserrat
            className="relative font-bold text-white text-xl tracking-tight"
            css={css`
              top: 50%;
              bottom: -35px;
            `}
          >
            {introduction}
          </Montserrat>
        </div>
      </div>
    </Link>
  )
}

const AboutTeamSection = () => {
  const [icon1, setIcon1] = React.useState('')
  const [icon2, setIcon2] = React.useState('')
  const [icon3, setIcon3] = React.useState('')
  const [icon4, setIcon4] = React.useState('')
  const [icon5, setIcon5] = React.useState('')
  const [icon6, setIcon6] = React.useState('')
  const member1 = 'baiUK5z4NYhFscfuwpJuT7NTwZs2'
  const member2 = 'VxsmdNRHlrZGyo7MGaocpyBWike2'
  const member3 = 'P1KoFpOh5vUUXk0UfcEzTkWeIPG3'
  const member4 = 'baiUK5z4NYhFscfuwpJuT7NTwZs2'
  const member5 = 'PXruLdkSBuOwhToj5YKwiK4swfH3'
  const member6 = 'obLmj5bGFjQNC0d8sa6WUc0XWXL2'

  PersonService.fetchById(member1).then(fetchedPerson => setIcon1(fetchedPerson.img || ''))
  PersonService.fetchById(member2).then(fetchedPerson => setIcon2(fetchedPerson.img || ''))
  PersonService.fetchById(member3).then(fetchedPerson => setIcon3(fetchedPerson.img || ''))
  PersonService.fetchById(member4).then(fetchedPerson => setIcon4(fetchedPerson.img || ''))
  PersonService.fetchById(member5).then(fetchedPerson => setIcon5(fetchedPerson.img || ''))
  PersonService.fetchById(member6).then(fetchedPerson => setIcon6(fetchedPerson.img || ''))
  const size = useWindowSize()
  const { width } = size
  return (
    <>
      <HeadLine>運営チーム</HeadLine>
      <div className="flex justify-center items-center mx-10">
        <Montserrat className="text-gray-300 text-center text-sm">StoryGateの開発/運営は以下のメンバーによって行われています。</Montserrat>
      </div>
      <BoardMember name="Shumpei Koike" title="Organizer" icon={icon1} to={member1} width={width} introduction="xxxxx" />
      <BoardMember name="Shoya Yanagisawa" title="Engineer" icon={icon2} to={member2} width={width} introduction="xxxxx" />
      <BoardMember name="Hiroki Matsui" title="Designer" icon={icon3} to={member3} width={width} introduction="xxxxx" />
      <div className="flex flex-row mx-4">
        <CoreMember name="Tomoko Naito" icon={icon5} to={member5} width={width} />
        <CoreMember name="Kotaro Matsunaga" icon={icon6} to={member6} width={width} />
      </div>
      <div className="flex flex-row mt-4">
        <LightMember name="Hanako Yamada" to="about" />
        <LightMember name="Hanako Yamada" to="about" />
      </div>
      <div className="flex flex-row">
        <LightMember name="Tanaka Taro" to="about" />
        <LightMember name="Tanaka Taro" to="about" />
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
