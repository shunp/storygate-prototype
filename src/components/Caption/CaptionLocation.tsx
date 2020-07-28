import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const CaptionLocation = () => {
  return (
    <div id="profile-location" className="m-1">
      <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" className="text-gray-500" />
      <span className="mx-1 text-gray-500">Hong Kong</span>
    </div>
  )
}

export default CaptionLocation
