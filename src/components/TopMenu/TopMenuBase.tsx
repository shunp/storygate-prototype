import * as React from 'react'
import { connect } from 'react-redux'
import { css } from '@emotion/core'
import 'src/styles/top-menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faMapMarkerAlt, faSearch, faEdit } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'
import { toggleEditCaption, toggleEditStory, toggleEditPortfolio, toggleEditCommunity } from 'src/state/app'

const MenuLinkWrapper = ({ title, to, icon }) => {
  return (
    <div className="flex justify-center w-full bg-gray-600 p-2 mt-4 rounded-lg">
      <Link to={`/${to}`}>
        <div
          className="text-white bg-gray-600 text-xl"
          css={css`
            font-family: 'Lato', sans-serif;
          `}
        >
          {icon}
          {title}
        </div>
      </Link>
    </div>
  )
}

const MenuButtonWrapper = ({ title, icon, onClick }) => {
  return (
    <div className="flex justify-center w-full bg-gray-600 p-2 mt-4 rounded-lg">
      <button type="button" className="focus:outline-none" onClick={onClick}>
        <div
          className="text-white bg-gray-600 text-xl"
          css={css`
            font-family: 'Lato', sans-serif;
          `}
        >
          {icon}
          {title}
        </div>
      </button>
    </div>
  )
}

const MapMenuButton = () => {
  return (
    <>
      <MenuLinkWrapper title="フレンドマップ" to="map" icon={<FontAwesomeIcon icon={faMapMarkerAlt} size="sm" className="mr-2" />} />
      <div className="text-white text-xs">
        グループ内の友達を地図上から検索できます。近くにある店舗や待ち合わせ場所を決める際に便利です。
      </div>
    </>
  )
}

const SearchMenuButton = () => {
  return (
    <>
      <MenuLinkWrapper title="キーワード検索" to="list" icon={<FontAwesomeIcon icon={faSearch} size="sm" className="mr-2" />} />
      <div className="text-white text-xs">キーワードで友達を検索できます。仕事の依頼や共通の趣味を持つ人を見つけることができます。</div>
    </>
  )
}

const EditCaptionButton = ({ editCaption }) => {
  const startEditingCaption = () => {
    editCaption()
    if (document.getElementById('top-menu-toggle')) {
      document.getElementById('top-menu-toggle').checked = false
    }
  }
  return (
    <>
      <MenuButtonWrapper
        title="プロフィール編集"
        icon={<FontAwesomeIcon icon={faEdit} size="sm" className="mr-2" />}
        onClick={startEditingCaption}
      />
      <div className="text-white text-xs">
        自分のプロフィールを変更できます。検索でヒットしてもらいやすいようなわかりやすいプロフィールを心がけましょう。
      </div>
    </>
  )
}

const EditPortfolioButton = ({ editPortfolio }) => {
  const startEditingPortfolio = () => {
    editPortfolio()
    // TODO: open portfolio tab
    // setOpenTab(1)
    if (document.getElementById('top-menu-toggle')) {
      document.getElementById('top-menu-toggle').checked = false
    }
  }
  return (
    <>
      <MenuButtonWrapper
        title="ポートフォリオ編集"
        icon={<FontAwesomeIcon icon={faEdit} size="sm" className="mr-2" />}
        onClick={startEditingPortfolio}
      />
      <div className="text-white text-xs">
        自分のポートフォリオを修正できます。最近の活動内容や自身の強みを記載してGiveできる項目をまとめてみましょう。
      </div>
    </>
  )
}

const EditStoryButton = ({ editStory }) => {
  const startEditingStory = () => {
    editStory()
    if (document.getElementById('top-menu-toggle')) {
      document.getElementById('top-menu-toggle').checked = false
    }
  }
  return (
    <>
      <MenuButtonWrapper
        title="ストーリー編集"
        icon={<FontAwesomeIcon icon={faEdit} size="sm" className="mr-2" />}
        onClick={startEditingStory}
      />
      <div className="text-white text-xs">
        自分のストーリーを修正できます。苦い経験や達成した出来事を過去から順に綴ったあなたの物語は、きっと共感者や応援してくれる仲間を呼ぶことに繋がるでしょう。
      </div>
    </>
  )
}

const EditCommunityButton = ({ editCommunity }) => {
  const startEditingCommunity = () => {
    editCommunity()
    if (document.getElementById('top-menu-toggle')) {
      document.getElementById('top-menu-toggle').checked = false
    }
  }
  return (
    <>
      <MenuButtonWrapper
        title="コミュニティ編集"
        icon={<FontAwesomeIcon icon={faEdit} size="sm" className="mr-2" />}
        onClick={startEditingCommunity}
      />
      <div className="text-white text-xs">自分のコミュニティを修正できます。所属先を増やして新たな仲間を見つけましょう。</div>
    </>
  )
}

const TopMenuBase = ({ logout, editCaption, editStory, editPortfolio, editCommunity }) => {
  return (
    <div className="menu-wrap">
      <input id="top-menu-toggle" type="checkbox" className="toggler" />
      <div className="hamburger">
        <div />
      </div>
      <div className="menu">
        <div className="flex-col">
          <div
            className="text-white font-bold text-3xl"
            css={css`
              font-family: 'Lato', sans-serif;
            `}
          >
            MENU
          </div>
          <MapMenuButton />
          <SearchMenuButton />
          <EditCaptionButton editCaption={editCaption} />
          <EditPortfolioButton editPortfolio={editPortfolio} />
          <EditStoryButton editStory={editStory} />
          <EditCommunityButton editCommunity={editCommunity} />
          <div
            className="text-sm text-gray-300 mt-6 p-2 border border-gray-300 rounded"
            onClick={logout}
            onKeyPress={logout}
            role="button"
            tabIndex={0}
          >
            <FontAwesomeIcon icon={faSignOutAlt} size="sm" className="mr-1" />
            Logout
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(
  state => ({}),
  dispatch => ({
    editCaption: () => dispatch(toggleEditCaption()),
    editStory: () => dispatch(toggleEditStory()),
    editPortfolio: () => dispatch(toggleEditPortfolio()),
    editCommunity: () => dispatch(toggleEditCommunity())
  })
)(TopMenuBase)
