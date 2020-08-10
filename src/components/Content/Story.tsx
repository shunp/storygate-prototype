import * as React from 'react'
import { Story } from 'src/services/interfaces/Story'
import { Text } from '../Provider/FreeText'
import { BallonTitleLine } from '../TitleLine'
import { StoryContentComponent } from '../Person/Story/StoryContent'

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
        value={inputNewURL}
        placeholder="Title..."
        onChange={e => setInputNewTitle(e.target.value)}
      />
      <div className="text-center mt-2">コンテンツURL</div>
      <input
        type="text"
        className="border-2 bordeer-gray-300 focus:outline-none bg-white w-full h-10 px-5 rounded-lg"
        value={inputNewTitle}
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
interface StoryLinetProps {
  story: Story
  size: number
}

export const StoryLine: React.FC<StoryLinetProps> = ({ story, size }) => {
  if (!story?.contents) {
    return <></>
  }
  return (
    <>
      {story.contents.map(p => (
        <StoryContentComponent content={p} size={size} />
      ))}
      <Text TitleLine={<BallonTitleLine title="Your Story" />} iframeKey="To Be Continue..." text="" size={size} />
    </>
  )
}
