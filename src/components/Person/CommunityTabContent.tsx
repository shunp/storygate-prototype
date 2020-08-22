import * as React from 'react'
import { CommunityReference } from 'src/services/interfaces/CommunityCaption'
import { ContentType } from 'src/services/interfaces/Content'
import { CommunityList, ModifiableCommunityList } from '../Content/Community'
import { PersonTabContentWrapper } from './PersonTabContentWrapper'

interface CommunityTabComponentProps {
  communities: CommunityReference[]
  openCommunities: string[]
  size: number
  editing: boolean
  toggleEditingCommunity: () => void
  update: (openCommunities: string[]) => Promise<void>
}
const CommunityTabContentComponent: React.FC<CommunityTabComponentProps> = ({
  communities,
  openCommunities,
  size,
  editing,
  toggleEditingCommunity,
  update
}) => {
  if (editing) {
    return (
      <ModifiableCommunityList
        communities={communities}
        openCommunities={openCommunities}
        size={size}
        toggleEditingCommunity={toggleEditingCommunity}
        update={update}
      />
    )
  }
  return <CommunityList communities={communities} openCommunities={openCommunities} size={size} />
}

type CommunityTabContentProps = CommunityTabComponentProps & {
  openTab: ContentType
}
const CommunityTabContent: React.FC<CommunityTabContentProps> = ({ openTab, ...props }) => {
  return (
    <PersonTabContentWrapper openTab={openTab} contentType="Community">
      <CommunityTabContentComponent {...props} />
    </PersonTabContentWrapper>
  )
}
export default CommunityTabContent
