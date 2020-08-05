import * as React from 'react'
import PostModalWrapper from './PostModalWrapper'
import ModalOverlay from './ModalOverlay'
import ModalContainer from './ModalContainer'

const PostModal = ({ Post, id }) => {
  return (
    <PostModalWrapper id={id}>
      <ModalOverlay id={id} />
      <ModalContainer>{Post}</ModalContainer>
    </PostModalWrapper>
  )
}
export default PostModal
