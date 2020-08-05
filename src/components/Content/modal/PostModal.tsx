import * as React from 'react'
import PostModalWrapper from './PostModalWrapper'
import ModalOverlay from './ModalOverlay'
import ModalContainer from './ModalContainer'

const PostModal = ({ post, id }) => {
  return (
    <PostModalWrapper id={id}>
      <ModalOverlay id={id} />
      <ModalContainer>{post}</ModalContainer>
    </PostModalWrapper>
  )
}
export default PostModal
