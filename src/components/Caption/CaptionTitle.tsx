import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'

export interface CaptionTitleProps {
  title: string
}
const CaptionTitle: React.FC<CaptionTitleProps> = ({ title }) => {
  return (
    <div id="profile-location" className="m-1">
      <FontAwesomeIcon icon={faAddressCard} size="1x" className="text-gray-500" />
      <span className="mx-1 text-gray-500">{title}</span>
    </div>
  )
}

export default CaptionTitle
