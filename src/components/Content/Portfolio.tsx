import * as React from 'react'
import { Portfolio } from 'src/services/interfaces/Portfolio'
import { BasicTitleLine, ModifiableTitleLine } from '../TitleLine'
import { EditingButton, DeleteButton, EditingButtonSet, CompleteButtonSet, ClearButton, DoneButton } from '../EditButton'
import { togglePostModal } from './modal/utils'
import PostModal from './modal/PostModal'
import { ContentExplanation, ModifiableContentExplanation } from '../ContentExplanation'
import { GeneralURL } from '../Provider/GeneralURL'
import { ContentLocation, ModifiableContentLocation } from '../ContentLocation'
import { PortfolioContentComponent } from '../Person/PortfolioContent'

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

interface PortfolioListProps {
  portfolio: Portfolio
  size: number
}
export const PortfolioList: React.FC<PortfolioListProps> = ({ portfolio, size }) => {
  if (!portfolio?.contents) {
    return <></>
  }
  return portfolio.contents.map(p => {
    switch (p.type) {
      case 'GeneralURL':
        return (
          <GeneralURL
            TitleLine={<BasicTitleLine title={p.title} />}
            Explain={<ContentExplanation text={p.text} />}
            Location={<ContentLocation location={p.location} />}
            fullURL={p.fullURL}
            pic={p.pic}
            iframeKey={p.iframeKey}
            text={p.text}
            size={size}
          />
        )
      default:
        return <PortfolioContentComponent content={p} size={size} />
    }
  })
}

export const ModifiablePortfolioList = ({ data, size }) => {
  const deletePost = (id: string) => {
    // delete modal
  }
  const editPost = (id: string) => {
    togglePostModal(id)
  }
  const clearEditing = (id: string) => {
    togglePostModal(id)
  }
  const doneEditing = (id: string) => {
    togglePostModal(id)
  }
  if (!data) {
    return <></>
  }
  return data.map(p => {
    switch (p.type) {
      case 'YouTubePost':
      case 'TwitterPost':
        return (
          <>
            <EditingButtonSet
              DeleteButton={<DeleteButton onClick={() => deletePost(p.id)} />}
              EditingButton={<EditingButton onClick={() => editPost(p.id)} />}
              className="mt-10"
            />
            <PortfolioContentComponent content={p} size={size} />
            <PostModal
              id={p.id}
              Post={
                <>
                  <CompleteButtonSet
                    ClearButton={<ClearButton onClick={() => clearEditing(p.id)} />}
                    DoneButton={<DoneButton onClick={() => doneEditing(p.id)} />}
                    className="mt-1"
                  />
                  <PortfolioContentComponent content={p} size={size} editing />
                </>
              }
            />
          </>
        )
      case 'GeneralURL':
        return (
          <>
            <EditingButtonSet
              DeleteButton={<DeleteButton onClick={() => deletePost(p.id)} />}
              EditingButton={<EditingButton onClick={() => editPost(p.id)} />}
              className="mt-10"
            />
            <GeneralURL
              TitleLine={<BasicTitleLine title={p.title} />}
              Explain={<ContentExplanation text={p.text} />}
              Location={<ContentLocation location={p.location} />}
              fullURL={p.fullURL}
              pic={p.pic}
              iframeKey={p.iframeKey}
              text={p.text}
              size={size}
            />
            <PostModal
              id={p.id}
              Post={
                <>
                  <CompleteButtonSet
                    ClearButton={<ClearButton onClick={() => clearEditing(p.id)} />}
                    DoneButton={<DoneButton onClick={() => doneEditing(p.id)} />}
                    className="mt-1"
                  />
                  <GeneralURL
                    TitleLine={<ModifiableTitleLine title={p.title} />}
                    Explain={<ModifiableContentExplanation text={p.text} />}
                    Location={<ModifiableContentLocation location={p.location} />}
                    fullURL={p.fullURL}
                    pic={p.pic}
                    iframeKey={p.iframeKey}
                    text={p.text}
                    size={size}
                  />
                </>
              }
            />
          </>
        )
      default:
        return <></>
    }
  })
}
