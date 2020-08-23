import * as React from 'react'
import { togglePostModal } from './utils'

interface ModalOverlayProps {
  id: string
  onFocusOut?: () => void
}
const ModalOverlay: React.FC<ModalOverlayProps> = ({ id, onFocusOut }) => {
  return (
    <div
      className="absolute w-full h-full bg-gray-900 opacity-90 z-10"
      onClick={() => {
        if (onFocusOut) {
          onFocusOut()
        }
        togglePostModal(id)
      }}
    />
    // <button type="button" onClick={() => toggleLoginModal()}>
    //   <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" />
    // </button>
  )
}
export default ModalOverlay
