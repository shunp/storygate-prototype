import * as React from 'react'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PostModal from 'src/components/Content/modal/PostModal'
import { togglePostModal } from 'src/components/Content/modal/utils'
import { CompleteButtonSet } from 'src/components/EditButton'
import ClearButton from 'src/components/ClearButton'
import DoneButton from 'src/components/DeleteButton'
import GroupProfileImg from './GroupProfileImg'

const MODAL_ID = 'NewGroup'
interface CreateGroupIconProps {
  createNewGroup: (name: string, backgroundImg?: Blob) => Promise<void>
}
export const CreateGroupIcon: React.FC<CreateGroupIconProps> = ({ createNewGroup }) => {
  const [name, setName] = React.useState('')
  const [backgroundImg, setBackgroundImg] = React.useState<Blob>()
  const clearEditing = () => {
    togglePostModal(MODAL_ID)
  }
  const doneEditing = async () => {
    await createNewGroup(name, backgroundImg)
    togglePostModal(MODAL_ID)
  }
  return (
    <>
      <div
        className="p-3 w-1/3"
        role="button"
        tabIndex={0}
        onKeyPress={() => togglePostModal(MODAL_ID)}
        onClick={() => togglePostModal(MODAL_ID)}
      >
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faPlusCircle} size="6x" className="w-24 h-24 rounded-full text-gray-500" />
          <div>New Group</div>
        </div>
      </div>
      <PostModal
        id={MODAL_ID}
        Post={
          <>
            <CompleteButtonSet
              ClearButton={<ClearButton onClick={() => clearEditing()} />}
              DoneButton={<DoneButton onClick={() => doneEditing()} />}
              className="mt-1"
            />
            <div id="line-title" className="flex flex-col w-full mt-2">
              <div className="m-1 text-xs text-white">グループ名</div>
              <input
                type="text"
                placeholder="Group Name..."
                className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-lg focus:outline-none"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div id="line-title" className="flex flex-col w-full mt-2">
              <div className="m-1 text-xs text-white">グループ画像</div>
              <GroupProfileImg setImg={setBackgroundImg} />
            </div>
          </>
        }
      />
    </>
  )
}
