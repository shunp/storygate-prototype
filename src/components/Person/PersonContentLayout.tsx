import * as React from 'react'
import { useWindowSize } from 'src/utils/useWindowSize'
import { Content, ContentType } from 'src/services/interfaces/Content'
import { Portfolio } from 'src/services/interfaces/Portfolio'
import { Story } from 'src/services/interfaces/Story'
import { Person } from 'src/services/interfaces/Person'
import PortfolioTabContent from './Portfolio/PortfolioTabContent'
import { resolveCurrentTab } from './PersonTabLayout'
import StoryTabContent from './Story/StoryTabContent'
import CommunityTabContent from './CommunityTabContent'
import PersonContentWrapper from './PersonContentWrapper'
import { SocialBadgeList } from './SocialBadgeList'

interface PersonContentLayoutProps {
  openTab: ContentType
  caption: Person
  content: Content
  editingPortfolio: boolean
  editingStory: boolean
  editingCommunity: boolean
  toggleEditingPortfolio: () => void
  toggleEditingStory: () => void
  toggleEditingCommunity: () => void
  updateContent: (updatedContent: Content) => void
}
const PersonContentLayout: React.FC<PersonContentLayoutProps> = ({
  openTab,
  caption,
  content,
  editingPortfolio,
  editingStory,
  editingCommunity,
  toggleEditingPortfolio,
  toggleEditingStory,
  toggleEditingCommunity,
  updateContent
}) => {
  const size = useWindowSize()
  return (
    <PersonContentWrapper>
      <SocialBadgeList openTab={openTab} socialMediaCaptions={content.socialMediaCaptions} personCaption={caption} />
      <PortfolioTabContent
        openTab={openTab}
        portfolio={content.portfolio}
        size={size.width}
        editing={editingPortfolio}
        toggleEditingPortfolio={toggleEditingPortfolio}
        update={(portfolio: Portfolio) => updateContent({ ...content, portfolio })}
      />
      <StoryTabContent
        openTab={openTab}
        story={content.story}
        size={size.width}
        editing={editingStory}
        toggleEditingStory={toggleEditingStory}
        update={(story: Story) => updateContent({ ...content, story })}
      />
      <CommunityTabContent
        openTab={openTab}
        communities={content.communities}
        size={size.width}
        editing={editingCommunity}
        openCommunities={content.openCommunities}
        toggleEditingCommunity={toggleEditingCommunity}
        update={async (openCommunities: string[]) => updateContent({ ...content, openCommunities })}
      />
    </PersonContentWrapper>
  )
}

export default PersonContentLayout
