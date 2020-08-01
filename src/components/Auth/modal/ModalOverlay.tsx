import * as React from 'react'
import { toggleLoginModal } from './utils'

const ModalOverlay = () => {
  return (
    <div className="absolute w-full h-full bg-gray-900 opacity-50 z-10" onClick={() => toggleLoginModal()} />
    // <button type="button" onClick={() => toggleLoginModal()}>
    //   <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" />
    // </button>
  )
}
export default ModalOverlay
