import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'

const CaptionTitle = () => {
  return (
    <div id="profile-location" className="m-1">
      <FontAwesomeIcon icon={faAddressCard} size="1x" className="text-gray-500" />
      <span className="mx-1 text-gray-500">Software Engineer</span>
    </div>
  )
}

export default CaptionTitle
