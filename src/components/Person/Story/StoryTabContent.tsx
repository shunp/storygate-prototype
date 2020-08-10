import * as React from 'react'
import { Story, StoryContent } from 'src/services/interfaces/Story'
import { extractFromUrl } from 'src/components/Provider/ContentsExtractor'
import { findOpenGraph } from 'src/services/firebase/functions'
import { WithIFrame, WithPicture } from 'src/services/interfaces/Portfolio'
import { StoryLine, AddStory, ModifiableStoryLine } from '../../Content/Story'
import { CompleteButtonSet, ClearButton, DoneButton } from '../../EditButton'

const createContent = async (
  time: string,
  title: string,
  url: string,
  explanation: string
): Promise<StoryContent<WithIFrame | WithPicture>> => {
  const contentElement = extractFromUrl(url)
  if (contentElement.type === 'GeneralURL') {
    const result = await findOpenGraph(url)
    return {
      id: `content${new Date().getTime()}`,
      time,
      title,
      text: explanation,
      type: contentElement.type,
      fullURL: contentElement.key,
      pic: result.ogImg
    }
  }
  return {
    id: `content${new Date().getTime()}`,
    time,
    title,
    text: explanation,
    type: contentElement.type,
    iframeKey: contentElement.key
  }
}
interface StoryTabContentProps {
  index: number
  openTab: number
  story: Story
  size: number
  editing: boolean
  toggleEditingStory: () => void
  update: (story: Story) => void
}
const StoryTabContent: React.FC<StoryTabContentProps> = ({ index, openTab, story, size, editing, toggleEditingStory, update }) => {
  const [inputNewTime, setInputNewTime] = React.useState('')
  const [inputNewTitle, setInputNewTitle] = React.useState('')
  const [inputNewURL, setInputNewURL] = React.useState('')
  const [inputNewExplanation, setInputNewExplanation] = React.useState('')
  const [inputNewLocation, setInputNewLocation] = React.useState('')
  const clearState = () => {
    setInputNewTime('')
    setInputNewTitle('')
    setInputNewURL('')
    setInputNewExplanation('')
    setInputNewLocation('')
  }
  const doneEditing = async () => {
    if (!inputNewTime) {
      // TODO: validate
      console.log('inputNewTime', inputNewTime)
      return
    }
    if (!inputNewTitle) {
      // TODO: validate
      console.log('inputNewTitle', inputNewTitle)
      return
    }

    if (!inputNewURL) {
      // TODO: validate
      console.log('inputNewURL', inputNewURL)
      return
    }
    const updated = { ...story }
    updated.contents.push(await createContent(inputNewTime, inputNewTitle, inputNewURL, inputNewExplanation))
    update(story)
    clearState()
    toggleEditingStory()
  }

  const resetEditing = () => {
    clearState()
    toggleEditingStory()
  }

  if (editing) {
    return (
      <div className={openTab === index ? 'block' : 'hidden'} id={`link${index}`}>
        <CompleteButtonSet
          ClearButton={<ClearButton onClick={resetEditing} />}
          DoneButton={<DoneButton onClick={doneEditing} />}
          className="mt-1"
        />
        <AddStory
          inputNewMonth={inputNewTime}
          setInputNewMonth={setInputNewTime}
          inputNewTitle={inputNewTitle}
          setInputNewTitle={setInputNewTitle}
          inputNewURL={inputNewURL}
          setInputNewURL={setInputNewURL}
          inputNewExplanation={inputNewExplanation}
          setInputNewExplanation={setInputNewExplanation}
        />
        <ModifiableStoryLine story={story} size={size} update={update} />
      </div>
    )
  }
  return (
    <div className={openTab === index ? 'block' : 'hidden'} id={`link${index}`}>
      <StoryLine story={story} size={size} />
    </div>
  )
}

export default StoryTabContent
