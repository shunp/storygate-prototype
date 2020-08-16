import * as React from 'react'
import { Montserrat } from 'src/components/SGText'
import { css } from '@emotion/core'
import PageRoot from 'src/components/Root/PageRoot'
import { connect } from 'react-redux'
import { navigate } from 'gatsby'

const Recruit = ({ loginUser }) => {
  const onApply = () => {
    if (loginUser.uid === '') {
      navigate('/')
      return
    }
    // TODO: save to DB
    // TODO: popup massage
    navigate(`/persons/${loginUser.uid}`)
  }
  const onSkip = () => {
    if (loginUser.uid === '') {
      navigate('/')
      return
    }
    // TODO: save to DB
    navigate(`/persons/${loginUser.uid}`)
  }
  return (
    <PageRoot>
      <div
        className="absolute w-full"
        css={css`
          background-color: #212020;
          height: 100%;
        `}
      >
        <div className="flex justify-center items-center mt-40 mb-10">
          <Montserrat className="text-white text-3xl font-bold">学生インターン募集</Montserrat>
        </div>
        <div className="flex justify-center items-center mx-5">
          <Montserrat className="text-gray-500">StoryGateは現在クローズドα版です。</Montserrat>
        </div>
        <div className="flex justify-center items-center mx-5">
          <Montserrat className="text-gray-500 text-center">
            より良いサービスを提供するため、またオンラインコミュニティ市場拡大のために、私たち平均年齢26歳の開発チームと一緒に働いてみませんか？
          </Montserrat>
        </div>
        <div className="flex justify-center items-center mx-5">
          <Montserrat className="text-gray-500 text-center">
            企画、開発、デザイン、広報、チームマネジメントなど、様々な分野でご参加いただけます。
          </Montserrat>
        </div>
        <div className="flex justify-center flex-col mt-10">
          <div className="flex justify-center">
            <button
              type="button"
              className="rounded-full bg-gradient-t-blue-pink-purple py-2 px-10 m-2 w-full text-white focus:outline-none"
              onClick={onApply}
            >
              参加したい
            </button>
          </div>
        </div>
        <div className="flex justify-center flex-col">
          <div className="flex justify-center">
            <button
              type="button"
              className="rounded-full bg-transparent border-2 border-purple-c1 py-2 px-10 m-2 w-full text-purple-c1 focus:outline-none"
              onClick={onSkip}
            >
              興味がない
            </button>
          </div>
        </div>
      </div>
    </PageRoot>
  )
}
export default connect(
  state => ({
    loginUser: state.app.loginUser
  }),
  dispatch => ({})
)(Recruit)
