import * as React from 'react'
import { AnyAction } from 'redux'
import { useWindowSize } from 'src/utils/useWindowSize'
import PortfolioTabContent from './PortfolioTabContent'
import StoryTabContent from './StoryTabContent'
import CommunityTabContent from './CommunityTabContent'
import PersonContentWrapper from './PersonContentWrapper'

interface PersonContentLayoutProps {
  openTab: number
  editingPortfolio: boolean
  editingStory: boolean
  editingCommunity: boolean
  dispatch: React.Dispatch<React.SetStateAction<AnyAction>>
}
const PersonContentLayout: React.FC<PersonContentLayoutProps> = ({
  openTab,
  editingPortfolio,
  editingStory,
  editingCommunity,
  dispatch
}) => {
  const size = useWindowSize()
  return (
    <PersonContentWrapper>
      <PortfolioTabContent index={1} openTab={openTab} size={size.width} editing={editingPortfolio} dispatch={dispatch} />
      <StoryTabContent index={2} openTab={openTab} size={size.width} editing={editingStory} dispatch={dispatch} />
      <CommunityTabContent index={3} openTab={openTab} size={size.width} editing={editingCommunity} dispatch={dispatch} />
    </PersonContentWrapper>
  )
}

export default PersonContentLayout
