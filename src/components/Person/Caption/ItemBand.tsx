import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import ChatButton from 'src/components/Header/ChatButton'

const ItemBand = ({ uid }) => {
  return (
    <ChatButton pageId={uid}>
      <FontAwesomeIcon icon={faPaw} size="2x" className="text-white mt-2" />
    </ChatButton>
  )
}

export default ItemBand
