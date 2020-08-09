import * as React from 'react'
import { Portfolio } from 'src/services/interfaces/Portfolio'
import { EditingButton, DeleteButton, EditingButtonSet, CompleteButtonSet, ClearButton, DoneButton } from '../EditButton'
import { togglePostModal } from './modal/utils'
import PostModal from './modal/PostModal'
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
type ModifiablePortfolioListProps = PortfolioListProps & {
  update: (portfolio: Portfolio) => void
}
export const PortfolioList: React.FC<PortfolioListProps> = ({ portfolio, size }) => {
  if (!portfolio?.contents) {
    return <></>
  }
  return portfolio.contents.map(p => <PortfolioContentComponent content={p} size={size} />)
}

export const ModifiablePortfolioList: React.FC<ModifiablePortfolioListProps> = ({ portfolio, size, update }) => {
  const [editingObj, setEditingObj] = React.useState({})
  const deletePost = (id: string) => {
    const updated = { ...portfolio }
    updated.contents = portfolio.contents.filter(content => content.id !== id)
    update(updated)
  }
  const editPost = (id: string) => {
    const target = portfolio.contents.find(content => content.id === id) || {}
    setEditingObj(target)
    togglePostModal(id)
  }
  const clearEditing = (id: string) => {
    togglePostModal(id)
  }
  const doneEditing = (id: string) => {
    const updated = { ...portfolio }
    const target = updated.contents.find(content => content.id === id)
    if (target) {
      Object.assign(target, editingObj)
      update(updated)
    }
    togglePostModal(id)
  }
  if (!portfolio?.contents) {
    return <></>
  }
  return portfolio.contents.map(p => {
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
              <PortfolioContentComponent
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
