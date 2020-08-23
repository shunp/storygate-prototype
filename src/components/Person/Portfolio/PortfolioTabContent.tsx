import * as React from 'react'
import { Portfolio, WithIFrame, WithPicture, PortfolioContent } from 'src/services/interfaces/Portfolio'
import { extractFromUrl } from 'src/components/Provider/ContentsExtractor'
import { findOpenGraph } from 'src/services/firebase/functions'
import { ContentType } from 'src/services/interfaces/Content'
import { CompleteButtonSet, ClearButton, DoneButton } from '../../EditButton'
import { NewPortfolio, PortfolioList, ModifiablePortfolioList } from '../../Content/Portfolio'
import { PersonTabContentWrapper } from '../PersonTabContentWrapper'

const createContent = async (title: string, url: string, explanation: string): Promise<PortfolioContent<WithIFrame | WithPicture>> => {
  const contentElement = extractFromUrl(url)
  if (contentElement.type === 'GeneralURL') {
    const result = await findOpenGraph(url)
    return {
      id: `content${new Date().getTime()}`,
      title,
      text: explanation,
      type: contentElement.type,
      fullURL: contentElement.key,
      pic: result.ogImg
    }
  }
  return {
    id: `content${new Date().getTime()}`,
    title,
    text: explanation,
    type: contentElement.type,
    iframeKey: contentElement.key
  }
}
interface PortfolioTabContentComponentProps {
  portfolio: Portfolio
  size: number
  editing: boolean
  toggleEditingPortfolio: () => void
  update: (portfolio: Portfolio) => void
}
const PortfolioTabContentComponent: React.FC<PortfolioTabContentComponentProps> = ({
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
    const updated = { ...portfolio }
    updated.contents.push(await createContent(inputNewTitle, inputNewURL, inputNewExplanation))
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
      <>
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
      </>
    )
  }
  return <PortfolioList portfolio={portfolio} size={size} />
}

type PortfolioTabContentProps = PortfolioTabContentComponentProps & {
  currentTab: ContentType
}
const PortfolioTabContent: React.FC<PortfolioTabContentProps> = ({ currentTab, ...props }) => {
  return (
    <PersonTabContentWrapper currentTab={currentTab} contentType="Portfolio">
      <PortfolioTabContentComponent {...props} />
    </PersonTabContentWrapper>
  )
}

export default PortfolioTabContent
