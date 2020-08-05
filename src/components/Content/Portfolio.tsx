import * as React from 'react'
import { YouTubePost } from '../Provider/YouTube'
import { TwitterPost } from '../Provider/Twitter'
import { BasicTitleLine, ModifiableTitleLine } from '../TitleLine'
import { EditingButton, DeleteButton, EditingButtonSet, CompleteButtonSet, ClearButton, DoneButton } from '../EditButton'
import { togglePostModal } from './modal/utils'
import PostModal from './modal/PostModal'
import { ContentExplanation, ModifiableContentExplanation } from '../ContentExplanation'

export const NewPortfolio = ({
  inputNewTitle,
  setInputNewTitle,
  inputNewURL,
  setInputNewURL,
  inputNewExplanation,
  setInputNewExplanation
}) => {
  return (
    <div id="new-portfolio" className="m-2">
      <div className="text-center text-lg font-bold">新しいコンテンツを追加</div>
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

export const PortfolioList = ({ data, size }) => {
  if (!data) {
    return <></>
  }
  return data.map(p => {
    switch (p.type) {
      case 'YouTubePost':
        return (
          <YouTubePost
            TitleLine={<BasicTitleLine title={p.title} />}
            Explain={<ContentExplanation text={p.text} />}
            iframeKey={p.iframeKey}
            text={p.text}
            size={size}
          />
        )
      case 'TwitterPost':
        return <TwitterPost TitleLine={<BasicTitleLine title={p.title} />} iframeKey={p.iframeKey} text={p.text} size={size} />
      default:
        return <></>
    }
  })
}

export const ModifiablePortfolioList = ({ data, size }) => {
  const deletePost = (id: string) => {}
  const editPost = (id: string) => {
    togglePostModal()
  }
  const clearEditing = () => {}
  const doneEditing = () => {}
  if (!data) {
    return <></>
  }
  return data.map(p => {
    switch (p.type) {
      case 'YouTubePost':
        return (
          <>
            <EditingButtonSet
              DeleteButton={<DeleteButton onClick={() => deletePost(p.id)} />}
              EditingButton={<EditingButton onClick={() => editPost(p.id)} />}
              className="mt-10"
            />
            <YouTubePost
              TitleLine={<BasicTitleLine title={p.title} />}
              Explain={<ContentExplanation text={p.text} />}
              iframeKey={p.iframeKey}
              text={p.text}
              size={size}
            />
            <PostModal
              post={
                <>
                  <CompleteButtonSet
                    ClearButton={<ClearButton onClick={clearEditing} />}
                    DoneButton={<DoneButton onClick={doneEditing} />}
                    className="mt-1"
                  />
                  <YouTubePost
                    TitleLine={<ModifiableTitleLine title={p.title} />}
                    Explain={<ModifiableContentExplanation text={p.text} />}
                    iframeKey={p.iframeKey}
                    text={p.text}
                    size={size}
                  />
                </>
              }
            />
          </>
        )
      case 'TwitterPost':
        return (
          <>
            <EditingButtonSet
              DeleteButton={<DeleteButton onClick={() => deletePost(p.id)} />}
              EditingButton={<EditingButton onClick={() => editPost(p.id)} />}
              className="mt-10"
            />
            <TwitterPost TitleLine={<BasicTitleLine title={p.title} />} iframeKey={p.iframeKey} text={p.text} size={size} />
          </>
        )
      default:
        return <></>
    }
  })
}
