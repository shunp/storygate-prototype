import * as React from 'react'
import { css } from '@emotion/core'
import 'src/styles/top-menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faMapMarkerAlt, faSearch, faEdit } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'
import { toggleEditCaption } from 'src/state/app'

const MapMenuBox = () => {
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

const SearchMenuBox = () => {
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

const EditCaptionBox = ({ dispatch }) => {
  const startEditingCaption = () => {
    dispatch(toggleEditCaption())
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

const EditPortfolioBox = ({ dispatch }) => {
  const startEditingCaption = () => {
    dispatch(toggleEditCaption())
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

const EditStoryBox = ({ dispatch }) => {
  const startEditingCaption = () => {
    dispatch(toggleEditCaption())
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
        ストーリー編集
      </div>
    </button>
  )
}

const EditCommunityBox = ({ dispatch }) => {
  const startEditingCaption = () => {
    dispatch(toggleEditCaption())
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

const TopMenuBase = ({ dispatch }) => {
  return (
    <div className="menu-wrap">
      <input id="top-menu-toggle" type="checkbox" className="toggler" />
      <div className="hamburger">
        <div />
      </div>
      <div className="menu">
        <div className="flex-col">
          <MapMenuBox />
          <SearchMenuBox />
          <EditCaptionBox dispatch={dispatch} />
          <EditPortfolioBox dispatch={dispatch} />
          <EditStoryBox dispatch={dispatch} />
          <EditCommunityBox dispatch={dispatch} />
          <div className="text-sm text-gray-600 mt-20 p-3 border border-gray-400 rounded">
            <FontAwesomeIcon icon={faSignOutAlt} size="sm" className="mr-1 text-gray-600" />
            Logout
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopMenuBase
