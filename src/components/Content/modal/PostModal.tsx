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
  onClear?: (id: string) => void
  onDone: (id: string) => Promise<void>
  onFocusOut?: () => void
  containerClassName?: string
}
export const DefaultPostModal: React.FC<DefaultPostModalProps> = ({
  Post,
  id,
  editing,
  onClear,
  onDone,
  onFocusOut,
  containerClassName
}) => {
  React.useEffect(() => {
    if (editing) {
      togglePostModal(id)
    }
  }, [editing])
  return (
    <PostModalWrapper id={id}>
      <ModalOverlay id={id} onFocusOut={onFocusOut} />
      <ModalContainer className={containerClassName}>
        <>
          <CompleteButtonSet
            ClearButton={
              <ClearButton
                onClick={() => {
                  if (onClear) {
                    onClear(id)
                  }
                  togglePostModal(id)
                }}
              />
            }
            DoneButton={
              <DoneButton
                onClick={async () => {
                  await onDone(id)
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
