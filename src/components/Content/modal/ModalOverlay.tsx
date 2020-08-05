import * as React from 'react'
import { togglePostModal } from './utils'

const ModalOverlay = ({ id }) => {
  return (
    <div className="absolute w-full h-full bg-gray-900 opacity-90 z-10" onClick={() => togglePostModal(id)} />
    // <button type="button" onClick={() => toggleLoginModal()}>
    //   <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" />
    // </button>
  )
}
export default ModalOverlay
