import * as React from 'react'
import { OgTag } from 'src/utils/scraper'
import { Portfolio } from 'src/services/interfaces/Portfolio'
import { CompleteButtonSet, ClearButton, DoneButton } from '../EditButton'
import { NewPortfolio, PortfolioList, ModifiablePortfolioList } from '../Content/Portfolio'

interface PortfolioTabContentProps {
  index: number
  openTab: number
  portfolio: Portfolio
  size: number
  editing: boolean
  toggleEditingPortfolio: () => void
}
const PortfolioTabContent: React.FC<PortfolioTabContentProps> = ({ index, openTab, portfolio, size, editing, toggleEditingPortfolio }) => {
  const [inputNewTitle, setInputNewTitle] = React.useState('')
  const [inputNewURL, setInputNewURL] = React.useState('')
  const [inputNewExplanation, setInputNewExplanation] = React.useState('')
  const [inputNewLocation, setInputNewLocation] = React.useState('')

  const doneEditing = async () => {
    // TODO: firebase
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

    const ogTag = new OgTag()
    const tagParam = await ogTag.fetch(inputNewURL)
    console.log('tagParam', tagParam)
    toggleEditingPortfolio()
  }

  const resetEditing = () => {
    toggleEditingPortfolio()
  }

  if (editing) {
    return (
      <div className={openTab === index ? 'block' : 'hidden'} id={`link${index}`}>
        <CompleteButtonSet
          ClearButton={<ClearButton onClick={resetEditing} />}
          DoneButton={<DoneButton onClick={doneEditing} />}
          className="mt-1"
        />
        <NewPortfolio
          inputNewTitle={inputNewTitle}
          setInputNewTitle={setInputNewTitle}
          inputNewURL={inputNewURL}
          setInputNewURL={setInputNewURL}
          inputNewExplanation={inputNewExplanation}
          setInputNewExplanation={setInputNewExplanation}
        />
        <ModifiablePortfolioList portfolio={portfolio} size={size} />
      </div>
    )
  }
  return (
    <div className={openTab === index ? 'block' : 'hidden'} id={`link${index}`}>
      <PortfolioList portfolio={portfolio} size={size} />
    </div>
  )
}

export default PortfolioTabContent
