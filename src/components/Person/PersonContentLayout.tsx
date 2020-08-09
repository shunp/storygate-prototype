import * as React from 'react'
import { useWindowSize } from 'src/utils/useWindowSize'
import PortfolioTabContent from './PortfolioTabContent'
import StoryTabContent from './StoryTabContent'
import CommunityTabContent from './CommunityTabContent'
import PersonContentWrapper from './PersonContentWrapper'
import { Content } from 'src/services/interfaces/Content'

interface PersonContentLayoutProps {
  openTab: number
  content: Content
  editingPortfolio: boolean
  editingStory: boolean
  editingCommunity: boolean
  toggleEditingPortfolio: () => void
  toggleEditingStory: () => void
}
const PersonContentLayout: React.FC<PersonContentLayoutProps> = ({
  openTab,
  content,
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
        portfolio={content.portfolio}
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
