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
  toggleEditingPortfolio: () => void
  toggleEditingStory: () => void
}
const PersonContentLayout: React.FC<PersonContentLayoutProps> = ({
  openTab,
  editingPortfolio,
  editingStory,
  editingCommunity,
  toggleEditingPortfolio,
  toggleEditingStory
}) => {
  const size = useWindowSize()
  return (
    <PersonContentWrapper>
      <PortfolioTabContent
        index={1}
        openTab={openTab}
        size={size.width}
        editing={editingPortfolio}
        toggleEditingPortfolio={toggleEditingPortfolio}
      />
      <StoryTabContent index={2} openTab={openTab} size={size.width} editing={editingStory} toggleEditingStory={toggleEditingStory} />
      <CommunityTabContent index={3} openTab={openTab} size={size.width} editing={editingCommunity} />
    </PersonContentWrapper>
  )
}

export default PersonContentLayout
