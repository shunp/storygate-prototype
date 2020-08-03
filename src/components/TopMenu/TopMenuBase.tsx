import * as React from 'react'
import { connect } from 'react-redux'
import { css } from '@emotion/core'
import 'src/styles/top-menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faMapMarkerAlt, faSearch, faEdit } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'
import { toggleEditCaption, toggleEditStory, toggleEditPortfolio, toggleEditCommunity } from 'src/state/app'

const MapMenuButton = () => {
  return (
    <Link to="/map">
      <div
        className="flex items-center text-2xl text-gray-200 font-semibold my-4 p-3 border border-white rounded"
        css={css`
          font-family: 'Lato', sans-serif;
        `}
      >
        <FontAwesomeIcon icon={faMapMarkerAlt} size="sm" className="mr-2" />
        フレンドマップ
      </div>
    </Link>
  )
}

const SearchMenuButton = () => {
  return (
    <Link to="/list">
      <div
        className="flex items-center text-2xl text-gray-200 font-semibold my-4 p-3 border border-white rounded"
        css={css`
          font-family: 'Lato', sans-serif;
        `}
      >
        <FontAwesomeIcon icon={faSearch} size="sm" className="mr-2" />
        キーワード検索
      </div>
    </Link>
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
    <button type="button" className="focus:outline-none" onClick={startEditingCaption}>
      <div
        className="flex items-center text-2xl text-gray-200 font-semibold my-4 p-3 border border-white rounded"
        css={css`
          font-family: 'Lato', sans-serif;
        `}
      >
        <FontAwesomeIcon icon={faEdit} size="sm" className="mr-2" />
        プロフィール編集
      </div>
    </button>
  )
}

const EditPortfolioButton = ({ editPortfolio }) => {
  const startEditingCaption = () => {
    editPortfolio()
    if (document.getElementById('top-menu-toggle')) {
      document.getElementById('top-menu-toggle').checked = false
    }
  }
  return (
    <button type="button" className="focus:outline-none" onClick={startEditingCaption}>
      <div
        className="flex items-center text-2xl text-gray-200 font-semibold my-4 p-3 border border-white rounded"
        css={css`
          font-family: 'Lato', sans-serif;
        `}
      >
        <FontAwesomeIcon icon={faEdit} size="sm" className="mr-2" />
        ポートフォリオ編集
      </div>
    </button>
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
    <button type="button" className="focus:outline-none" onClick={startEditingStory}>
      <div
        className="flex items-center text-2xl text-gray-200 font-semibold my-4 p-3 border border-white rounded"
        css={css`
          font-family: 'Lato', sans-serif;
        `}
      >
        <FontAwesomeIcon icon={faEdit} size="sm" className="mr-2" />
        ストーリー編集
      </div>
    </button>
  )
}

const EditCommunityButton = ({ editCommunity }) => {
  const startEditingCaption = () => {
    editCommunity()
    if (document.getElementById('top-menu-toggle')) {
      document.getElementById('top-menu-toggle').checked = false
    }
  }
  return (
    <button type="button" className="focus:outline-none" onClick={startEditingCaption}>
      <div
        className="flex items-center text-2xl text-gray-200 font-semibold my-4 p-3 border border-white rounded"
        css={css`
          font-family: 'Lato', sans-serif;
        `}
      >
        <FontAwesomeIcon icon={faEdit} size="sm" className="mr-2" />
        コミュニティ編集
      </div>
    </button>
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
          <MapMenuButton />
          <SearchMenuButton />
          <EditCaptionButton editCaption={editCaption} />
          <EditPortfolioButton editPortfolio={editPortfolio} />
          <EditStoryButton editStory={editStory} />
          <EditCommunityButton editCommunity={editCommunity} />
          <div
            className="text-sm text-gray-200 mt-20 p-3 border border-white rounded"
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
