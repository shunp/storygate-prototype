import * as React from 'react'
import { css } from '@emotion/core'
import 'src/styles/top-menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faMapMarkerAlt, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'

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
        FriendMap
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
        Search
      </div>
    </Link>
  )
}

const TopMenuBase = () => {
  return (
    <div className="menu-wrap">
      <input type="checkbox" className="toggler" />
      <div className="hamburger">
        <div />
      </div>
      <div className="menu">
        <div className="flex-col">
          <MapMenuBox />
          <SearchMenuBox />
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
