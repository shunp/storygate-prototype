import * as React from 'react'
import { Widget, addResponseMessage, toggleWidget } from 'react-chat-widget'
import 'src/styles/chat.css'
import Chat from 'src/components/Chat'

const ItemBand = ({ uid, loginUser }) => {
  return (
    <>
      {loginUser.loggedIn ? <Chat loginUser={loginUser} to={uid} /> : ''}
      {/* <button type="button" className="text-white" onClick={() => action()}>
        <FontAwesomeIcon icon={faPaw} size="2x" className="text-white mt-2" />
      </button> */}
    </>
  )
}

export default ItemBand
