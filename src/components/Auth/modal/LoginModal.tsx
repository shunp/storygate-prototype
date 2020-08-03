import * as React from 'react'
import ModalLoginPanel from './ModalLoginPanel'
import ModalContainer from './ModalContainer'
import ModalOverlay from './ModalOverlay'
import LoginModalWrapper from './LoginModalWrapper'

const LoginModal = ({ login }) => {
  return (
    <LoginModalWrapper>
      <ModalOverlay />
      <ModalContainer>
        <ModalLoginPanel login={login} />
      </ModalContainer>
    </LoginModalWrapper>
  )
}

export default LoginModal
