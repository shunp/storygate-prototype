import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export interface CaptionLocationProps {
  location: string
}
const CaptionLocation: React.FC<CaptionLocationProps> = ({ location }) => {
  return (
    <div id="profile-location" className="m-1">
      <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" className="text-gray-500" />
      <span className="mx-1 text-gray-500">{location}</span>
    </div>
  )
}

export default CaptionLocation
