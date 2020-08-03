import * as React from 'react'
import { FacebookLoginButton, InvitationLoginButton } from 'src/components/Auth'
import { toggleLoginModal } from './utils'

export const modalId = 'login-panel'

const ModalLoginPanel = ({ login }) => {
  return (
    <div data-cy={modalId} className="modal-content py-4 text-left px-6">
      <div className="flex justify-between items-center pb-3">
        <div className="modal-close cursor-pointer z-50">
          <svg
            className="fill-current text-black"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            onClick={() => toggleLoginModal()}
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
          </svg>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <span className="bold text-gray-600 text-sm px-2">既にアカウントをお持ちの方はこちらからログインできます。</span>
      </div>
      <div className="flex justify-center items-center pt-2 bg-white pb-4">
        <FacebookLoginButton login={login} />
      </div>
      <div className="flex justify-center items-center mt-10">
        <span className="bold text-gray-600 text-sm px-2">
          新規ユーザは招待コードまたは招待URLが必要です。招待コードをお持ちの方はこちらに入力の上SignUpボタンを押してください。
        </span>
      </div>
      <div className="flex justify-center items-center bg-white pb-4">
        <InvitationLoginButton login={login} />
      </div>
    </div>
  )
}

export default ModalLoginPanel
