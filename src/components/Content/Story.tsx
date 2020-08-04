import * as React from 'react'
import { YouTubePost } from '../Provider/YouTube'
import { TwitterPost } from '../Provider/Twitter'
import { FacebookPost } from '../Provider/Facebook'
import { InstagramPost } from '../Provider/Instagram'
import { Text } from '../Provider/FreeText'
import { BallonTitleLine } from '../TitleLine'

export const AddStory = ({ inputNewTitle, setInputNewTitle, inputNewURL, setInputNewURL, inputNewExplanation, setInputNewExplanation }) => {
  return (
    <div id="add-story" className="m-2">
      <div className="text-center text-lg font-bold">新しいコンテンツを追加</div>
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

export const Story = ({ data, size }) => {
  if (!data) {
    return <></>
  }
  const StoryLine = data.map(p => {
    switch (p.type) {
      case 'YouTubePost':
        return (
          <YouTubePost TitleLine={<BallonTitleLine title={p.title} time={p.time} />} iframeKey={p.iframeKey} text={p.text} size={size} />
        )
      case 'TwitterPost':
        return (
          <TwitterPost TitleLine={<BallonTitleLine title={p.title} time={p.time} />} iframeKey={p.iframeKey} text={p.text} size={size} />
        )
      case 'FacebookPost':
        return (
          <FacebookPost TitleLine={<BallonTitleLine title={p.title} time={p.time} />} iframeKey={p.iframeKey} text={p.text} size={size} />
        )
      case 'InstagramPost':
        return (
          <InstagramPost TitleLine={<BallonTitleLine title={p.title} time={p.time} />} iframeKey={p.iframeKey} text={p.text} size={size} />
        )
      case 'Text':
        return <Text TitleLine={<BallonTitleLine title={p.title} time={p.time} />} iframeKey={p.iframeKey} text={p.text} size={size} />
      default:
        return <></>
    }
  })
  return (
    <>
      {StoryLine}
      <Text TitleLine={<BallonTitleLine title="Your Story" />} iframeKey="To Be Continue..." text="" size={size} />
    </>
  )
}
