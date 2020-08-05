import * as React from 'react'
import PostModalWrapper from './PostModalWrapper'
import ModalOverlay from './ModalOverlay'
import ModalContainer from './ModalContainer'

const PostModal = ({ post }) => {
  return (
    <PostModalWrapper>
      <ModalOverlay />
      <ModalContainer>{post}</ModalContainer>
    </PostModalWrapper>
  )
}
export default PostModal
