import * as React from 'react'
import { useWindowSize } from 'src/utils/useWindowSize'
import { Content } from 'src/services/interfaces/Content'
import { Portfolio } from 'src/services/interfaces/Portfolio'
import { Story } from 'src/services/interfaces/Story'
import { CommunityReference } from 'src/services/interfaces/CommunityCaption'
import PortfolioTabContent from './Portfolio/PortfolioTabContent'
import StoryTabContent from './Story/StoryTabContent'
import CommunityTabContent from './CommunityTabContent'
import PersonContentWrapper from './PersonContentWrapper'

interface PersonContentLayoutProps {
  openTab: number
  content: Content
  communities: CommunityReference[]
  editingPortfolio: boolean
  editingStory: boolean
  editingCommunity: boolean
  toggleEditingPortfolio: () => void
  toggleEditingStory: () => void
  updateContent: (updatedContent: Content) => void
}
const PersonContentLayout: React.FC<PersonContentLayoutProps> = ({
  openTab,
  content,
  communities,
  editingPortfolio,
  editingStory,
  editingCommunity,
  toggleEditingPortfolio,
  toggleEditingStory,
  updateContent
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
        update={(portfolio: Portfolio) => updateContent({ ...content, portfolio })}
      />
      <StoryTabContent
        index={2}
        openTab={openTab}
        story={content.story}
        size={size.width}
        editing={editingStory}
        toggleEditingStory={toggleEditingStory}
        update={(story: Story) => updateContent({ ...content, story })}
      />
      <CommunityTabContent index={3} openTab={openTab} communities={communities} size={size.width} editing={editingCommunity} />
    </PersonContentWrapper>
  )
}

export default PersonContentLayout
