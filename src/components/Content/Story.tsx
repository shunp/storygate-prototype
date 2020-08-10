import * as React from 'react'
import { Story } from 'src/services/interfaces/Story'
import { Text } from '../Provider/FreeText'
import { BallonTitleLine } from '../TitleLine'
import { StoryContentComponent } from '../Person/Story/StoryContent'
import { EditingButtonSet, DeleteButton, EditingButton, CompleteButtonSet } from '../EditButton'
import PostModal from './modal/PostModal'
import ClearButton from '../ClearButton'
import DoneButton from '../DeleteButton'
import { togglePostModal } from './modal/utils'

export const AddStory = ({
  inputNewMonth,
  setInputNewMonth,
  inputNewTitle,
  setInputNewTitle,
  inputNewURL,
  setInputNewURL,
  inputNewExplanation,
  setInputNewExplanation
}) => {
  return (
    <div id="add-story" className="m-2">
      <div className="text-center text-lg font-bold">新しいコンテンツを追加</div>
      <div className="text-center mt-2">時期</div>
      <input
        type="month"
        className="border-2 bordeer-gray-300 focus:outline-none bg-white w-full h-10 px-5 rounded-lg"
        value={inputNewMonth}
        onChange={e => setInputNewMonth(e.target.value)}
      />
      <div className="text-center mt-2">タイトル</div>
      <input
        type="text"
        className="border-2 bordeer-gray-300 focus:outline-none bg-white w-full h-10 px-5 rounded-lg"
        value={inputNewTitle}
        placeholder="Title..."
        onChange={e => setInputNewTitle(e.target.value)}
      />
      <div className="text-center mt-2">コンテンツURL</div>
      <input
        type="text"
        className="border-2 bordeer-gray-300 focus:outline-none bg-white w-full h-10 px-5 rounded-lg"
        value={inputNewURL}
        placeholder="URL..."
        onChange={e => setInputNewURL(e.target.value)}
      />
      <div className="text-center mt-2">詳細</div>
      <textarea
        className="border-2 bordeer-gray-300 focus:outline-none bg-white h-20 w-full px-5 rounded-lg"
        value={inputNewExplanation}
        placeholder="Introduction..."
        onChange={e => setInputNewExplanation(e.target.value)}
      />
    </div>
  )
}
interface StoryLineProps {
  story: Story
  size: number
}
type ModifiableStoryLineProps = StoryLineProps & {
  update: (story: Story) => void
}

export const StoryLine: React.FC<StoryLineProps> = ({ story, size }) => {
  if (!story?.contents) {
    return <></>
  }
  return (
    <>
      {story.contents.map(p => (
        <StoryContentComponent content={p} size={size} />
      ))}
      <Text TitleLine={<BallonTitleLine title="Your Story" />} iframeKey="To Be Continued..." text="" size={size} />
    </>
  )
}

export const ModifiableStoryLine: React.FC<ModifiableStoryLineProps> = ({ story, size, update }) => {
  const [editingObj, setEditingObj] = React.useState({})
  const deletePost = (id: string) => {
    const updated = { ...story }
    updated.contents = story.contents.filter(content => content.id !== id)
    update(updated)
  }
  const editPost = (id: string) => {
    const target = story.contents.find(content => content.id === id) || {}
    setEditingObj(target)
    togglePostModal(id)
  }
  const clearEditing = (id: string) => {
    togglePostModal(id)
  }
  const doneEditing = (id: string) => {
    const updated = { ...story }
    const target = updated.contents.find(content => content.id === id)
    if (target) {
      Object.assign(target, editingObj)
      update(updated)
    }
    togglePostModal(id)
  }
  if (!story?.contents) {
    return <></>
  }
  return story.contents.map(p => {
    return (
      <>
        <EditingButtonSet
          DeleteButton={<DeleteButton onClick={() => deletePost(p.id)} />}
          EditingButton={<EditingButton onClick={() => editPost(p.id)} />}
          className="mt-10"
        />
        <StoryContentComponent content={p} size={size} />
        <PostModal
          id={p.id}
          Post={
            <>
              <CompleteButtonSet
                ClearButton={<ClearButton onClick={() => clearEditing(p.id)} />}
                DoneButton={<DoneButton onClick={() => doneEditing(p.id)} />}
                className="mt-1"
              />
              <StoryContentComponent
                content={p}
                size={size}
                editingObj={editingObj}
                onChange={(key: string, value: string) => setEditingObj({ ...editingObj, [key]: value })}
              />
            </>
          }
        />
      </>
    )
  })
}
