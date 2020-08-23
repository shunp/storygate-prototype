import * as React from 'react'
import { CompleteButtonSet } from 'src/components/EditButton'
import ClearButton from 'src/components/ClearButton'
import DoneButton from 'src/components/DeleteButton'
import PostModalWrapper from './PostModalWrapper'
import ModalOverlay from './ModalOverlay'
import ModalContainer from './ModalContainer'
import { togglePostModal } from './utils'

interface PostModalProps {
  Post: JSX.Element
  id: string
}
const PostModal: React.FC<PostModalProps> = ({ Post, id }) => {
  return (
    <PostModalWrapper id={id}>
      <ModalOverlay id={id} />
      <ModalContainer>{Post}</ModalContainer>
    </PostModalWrapper>
  )
}

type DefaultPostModalProps = PostModalProps & {
  editing: boolean
  onClear: () => void
  onDone: () => Promise<void>
  onFocusOut?: () => void
}
export const DefaultPostModal: React.FC<DefaultPostModalProps> = ({ Post, id, editing, onClear, onDone, onFocusOut }) => {
  React.useEffect(() => {
    if (editing) {
      togglePostModal(id)
    }
  }, [editing])
  return (
    <PostModalWrapper id={id}>
      <ModalOverlay id={id} onFocusOut={onFocusOut} />
      <ModalContainer>
        <>
          <CompleteButtonSet
            ClearButton={
              <ClearButton
                onClick={() => {
                  onClear()
                  togglePostModal(id)
                }}
              />
            }
            DoneButton={
              <DoneButton
                onClick={async () => {
                  await onDone()
                  togglePostModal(id)
                }}
              />
            }
            className="mt-1"
          />
          {Post}
        </>
      </ModalContainer>
    </PostModalWrapper>
  )
}
export default PostModal
