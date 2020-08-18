import * as React from 'react'
import { connect } from 'react-redux'
import { css } from '@emotion/core'
import 'src/styles/top-menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'
import {
  toggleEditingCaptionAction,
  toggleEditingStoryAction,
  toggleEditingPortfolioAction,
  toggleEditingCommunityAction
} from 'src/state/app'
// TODO: import { CSSTransition } from 'react-transition-group'
import { Montserrat } from '../SGText'

const MenuLinkWrapper = ({ title, to }) => {
  return (
    <div className="m-2 w-full px-10 z-30">
      <Link to={`/${to}`}>
        <Montserrat className="text-left text-white font-bold text-2xl">{title}</Montserrat>
      </Link>
    </div>
  )
}

const MenuButtonWrapper = ({ title, onClick }) => {
  return (
    <div className="m-2">
      <button type="button" className="focus:outline-none" onClick={onClick}>
        <Montserrat className="text-left text-purple-c2 bg-white font-bold text-2xl pl-2 w-48">{title}</Montserrat>
      </button>
    </div>
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
      <MenuButtonWrapper title="Profile" onClick={startEditingCaption} />
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
      <MenuButtonWrapper title="Portfolio" onClick={startEditingPortfolio} />
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
      <MenuButtonWrapper title="Story" onClick={startEditingStory} />
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
      <MenuButtonWrapper title="Community" onClick={startEditingCommunity} />
    </>
  )
}

const CloseMenuButtom = ({ onClick }) => {
  return (
    <div className="absolute w-2/3 h-screen">
      <div className="float-top mt-20">
        <button type="button" className="text-white" onClick={onClick}>
          <Montserrat className="text-white font-bold">
            <span className="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" enableBackground="new 0 0 40 40">
                <line x1="15" y1="15" x2="25" y2="25" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10" />
                <line x1="25" y1="15" x2="15" y2="25" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10" />
                <circle
                  className="circle"
                  cx="20"
                  cy="20"
                  r="19"
                  opacity="0"
                  stroke="#000"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  fill="none"
                />
                <path
                  d="M20 1c10.45 0 19 8.55 19 19s-8.55 19-19 19-19-8.55-19-19 8.55-19 19-19z"
                  className="progress"
                  stroke="#fff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  fill="none"
                />
              </svg>
            </span>
            Close
          </Montserrat>
        </button>
      </div>
    </div>
  )
}

const TopMenuBase = ({ logout, editCaption, editStory, editPortfolio, editCommunity }) => {
  const [editingMode, setEditingmode] = React.useState<boolean>(false)

  const onCloseMenu = () => {
    if (document.getElementById('top-menu-toggle')) {
      document.getElementById('top-menu-toggle').checked = false
    }
  }
  return (
    <div className="menu-wrap">
      <input id="top-menu-toggle" type="checkbox" className="toggler" />
      <div className="hamburger">
        <div />
      </div>
      <div className="menu">
        <div className="flex-col">
          <CloseMenuButtom onClick={onCloseMenu} />
          <MenuLinkWrapper title="Map" to="map" />
          <div className="relative m-2 w-full px-8">
            <button
              type="button"
              className="float-left w-48 pl-2 bg-transparent focus:outline-none focus:bg-gradient-t-blue-pink-purple border border-none hover:border-blue-500 "
              onClick={() => setEditingmode(!editingMode)}
            >
              <Montserrat className="text-left text-white font-bold text-2xl">Edit</Montserrat>
            </button>

            {editingMode && (
              <div className="right-0 mt-2 py-2 w-48 rounded-lg shadow-xl text-left">
                <EditCaptionButton editCaption={editCaption} />
                <EditPortfolioButton editPortfolio={editPortfolio} />
                <EditStoryButton editStory={editStory} />
                <EditCommunityButton editCommunity={editCommunity} />
              </div>
            )}
          </div>
          <div className="mt-20" />

          <MenuLinkWrapper title="About" to="about" />
          <MenuLinkWrapper title="Company" to="company" />
          <MenuLinkWrapper title="FAQ" to="faq" />
          <div className="text-sm text-gray-300 mt-10 p-2" onClick={logout} onKeyPress={logout} role="button" tabIndex={0}>
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
    editCaption: () => dispatch(toggleEditingCaptionAction()),
    editStory: () => dispatch(toggleEditingStoryAction()),
    editPortfolio: () => dispatch(toggleEditingPortfolioAction()),
    editCommunity: () => dispatch(toggleEditingCommunityAction())
  })
)(TopMenuBase)
