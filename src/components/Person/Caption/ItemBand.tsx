import * as React from 'react'
import ChatButton from 'src/components/Header/ChatButton'
import { Widget, addResponseMessage, toggleWidget } from 'react-chat-widget'
import 'src/styles/chat.css'

const ItemBand = ({ loginUser, uid }) => {
  return (
    <>
      <ChatButton from={loginUser.ownerUid} to={uid} />
      {/* <button type="button" className="text-white" onClick={() => action()}>
        <FontAwesomeIcon icon={faPaw} size="2x" className="text-white mt-2" />
      </button> */}
    </>
  )
}

export default ItemBand
