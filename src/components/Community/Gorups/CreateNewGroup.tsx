import * as React from 'react'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PostModal from 'src/components/Content/modal/PostModal'
import { togglePostModal } from 'src/components/Content/modal/utils'
import GroupProfileImg from './GroupProfileImg'

export const CreateGroupIcon: React.FC = () => {
  return (
    <>
      <div
        className="p-3 w-1/3"
        role="button"
        tabIndex={0}
        onKeyPress={() => togglePostModal('NewGroup')}
        onClick={() => togglePostModal('NewGroup')}
      >
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faPlusCircle} size="6x" className="w-24 h-24 rounded-full text-gray-500" />
          <div>New Group</div>
        </div>
      </div>
      <PostModal
        id="NewGroup"
        Post={
          <>
            <div id="line-title" className="flex flex-col w-full mt-2">
              <div className="m-1 text-xs text-white">グループ名</div>
              <input
                type="text"
                placeholder="title..."
                className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-lg focus:outline-none"
                value="New Group"
                // onChange={e => onChange('title', e.target.value)}
              />
            </div>
            <div id="line-title" className="flex flex-col w-full mt-2">
              <div className="m-1 text-xs text-white">グループ説明</div>
              <input
                type="text"
                placeholder="title..."
                className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-lg focus:outline-none"
                value="New Group"
                // onChange={e => onChange('title', e.target.value)}
              />
            </div>
            <div id="line-title" className="flex flex-col w-full mt-2">
              <div className="m-1 text-xs text-white">グループ画像</div>
              <GroupProfileImg profileImg="a" setProfileImg={() => {}} />
            </div>
          </>
        }
      />
    </>
  )
}
