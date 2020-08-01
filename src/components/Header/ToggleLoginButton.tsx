import * as React from 'react'
import { toggleLoginModal } from 'src/components/Auth/modal/utils'

const ToggleLoginButton: React.FC = () => {
  return (
    <button
      data-cy="login"
      type="submit"
      className="modal-open inline-block text-xs px-2 py-2 leading-none text-black border-black border rounded"
      onClick={() => {
        toggleLoginModal()
      }}
    >
      Login
    </button>
  )
}

export default ToggleLoginButton
