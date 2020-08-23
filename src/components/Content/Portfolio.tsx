import * as React from 'react'
import { Portfolio } from 'src/services/interfaces/Portfolio'
import { Montserrat } from 'src/components/SGText'
import { ModifiableContentLocation, MapLocatingForm } from 'src/components/ContentLocation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { EditingButton, DeleteButton, EditingButtonSet, CompleteButtonSet, ClearButton, DoneButton } from '../EditButton'
import { togglePostModal } from './modal/utils'
import { DefaultPostModal } from './modal/PostModal'
import { PortfolioContentComponent } from '../Person/Portfolio/PortfolioContent'

export const NewPortfolio = ({
  inputNewTitle,
  setInputNewTitle,
  inputNewURL,
  setInputNewURL,
  inputNewExplanation,
  setInputNewExplanation,
  inputNewLocation,
  setInputNewLocation
}) => {
  const [mapLocating, setMapLocating] = React.useState(false)
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
      <div className="flex justify-center mt-2">
        <div>場所(実店舗の場合のみ)</div>
        <FontAwesomeIcon size="1x" icon={faMapMarkerAlt} onClick={() => setMapLocating(true)} className="text-gray-500" />
      </div>
      <MapLocatingForm
        location={inputNewLocation}
        mapLocating={mapLocating}
        endMapLocating={() => setMapLocating(false)}
        onChange={(_, location) => setInputNewLocation(location)}
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
  if (!portfolio?.contents.length) {
    return (
      <div className="h-screen">
        <Montserrat className="text-md font-bold text-center">表示できるコンテンツがありません</Montserrat>
      </div>
    )
  }
  const PortfolioContents = portfolio.contents.map(p => <PortfolioContentComponent key={p.id} content={p} size={size} />)
  return <>{PortfolioContents}</>
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
  }
  const doneEditing = async (id: string) => {
    const updated = { ...portfolio }
    const target = updated.contents.find(content => content.id === id)
    if (target) {
      Object.assign(target, editingObj)
      update(updated)
    }
    setEditingObj({})
  }
  if (!portfolio?.contents) {
    return <></>
  }
  const PortfolioContents = portfolio.contents.map(p => {
    return (
      <div key={p.id}>
        <EditingButtonSet
          DeleteButton={<DeleteButton onClick={() => deletePost(p.id)} />}
          EditingButton={<EditingButton onClick={() => editPost(p.id)} />}
          className="mt-10"
        />
        <PortfolioContentComponent content={p} size={size} />
        <DefaultPostModal
          id={p.id}
          editing={editingObj.id === p.id}
          onDone={doneEditing}
          onClear={() => setEditingObj({})}
          onFocusOut={() => setEditingObj({})}
          Post={
            <PortfolioContentComponent
              content={p}
              size={size}
              editingObj={editingObj}
              onChange={(key: string, value: string) => setEditingObj({ ...editingObj, [key]: value })}
            />
          }
        />
      </div>
    )
  })
  return <>{PortfolioContents} </>
}
