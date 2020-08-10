import * as React from 'react'
import { OgTag } from 'src/utils/scraper'
import { Portfolio } from 'src/services/interfaces/Portfolio'
import { CompleteButtonSet, ClearButton, DoneButton } from '../EditButton'
import { NewPortfolio, PortfolioList, ModifiablePortfolioList } from '../Content/Portfolio'
import { extractFromUrl } from '../Provider/ContentsExtractor'

interface PortfolioTabContentProps {
  index: number
  openTab: number
  portfolio: Portfolio
  size: number
  editing: boolean
  toggleEditingPortfolio: () => void
  update: (portfolio: Portfolio) => void
}
const PortfolioTabContent: React.FC<PortfolioTabContentProps> = ({
  index,
  openTab,
  portfolio,
  size,
  editing,
  toggleEditingPortfolio,
  update
}) => {
  const [inputNewTitle, setInputNewTitle] = React.useState('')
  const [inputNewURL, setInputNewURL] = React.useState('')
  const [inputNewExplanation, setInputNewExplanation] = React.useState('')
  const [inputNewLocation, setInputNewLocation] = React.useState('')
  const clearState = () => {
    setInputNewTitle('')
    setInputNewURL('')
    setInputNewExplanation('')
    setInputNewLocation('')
  }
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

    // const ogTag = new OgTag()
    // const tagParam = await ogTag.fetch(inputNewURL)
    // console.log('tagParam', tagParam)
    const contentElement = extractFromUrl(inputNewURL)
    const content = {
      id: `content${new Date().getTime()}`,
      title: inputNewTitle,
      text: inputNewExplanation,
      type: contentElement.type,
      iframeKey: contentElement.key
    }
    const updated = { ...portfolio }
    updated.contents.unshift(content)
    update(portfolio)
    clearState()
    toggleEditingPortfolio()
  }

  const resetEditing = () => {
    clearState()
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
        <ModifiablePortfolioList portfolio={portfolio} size={size} update={update} />
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
