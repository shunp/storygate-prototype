import * as React from 'react'
import { CommunityReference } from 'src/services/interfaces/CommunityCaption'
import { CommunityList, ModifiableCommunityList } from '../Content/Community'

interface CommunityTabProps {
  index: number
  openTab: number
  communities: CommunityReference[]
  openCommunities: string[]
  size: number
  editing: boolean
  toggleEditingCommunity: () => void
  update: (openCommunities: string[]) => Promise<void>
}
const CommunityTabContent: React.FC<CommunityTabProps> = ({
  index,
  openTab,
  communities,
  openCommunities,
  size,
  editing,
  toggleEditingCommunity,
  update
}) => {
  if (editing) {
    return (
      <div className={openTab === index ? 'block' : 'hidden'} id={`link${index}`}>
        <ModifiableCommunityList
          communities={communities}
          openCommunities={openCommunities}
          size={size}
          toggleEditingCommunity={toggleEditingCommunity}
          update={update}
        />
      </div>
    )
  }
  return (
    <div className={openTab === index ? 'block' : 'hidden'} id={`link${index}`}>
      <CommunityList communities={communities} openCommunities={openCommunities} size={size} />
    </div>
  )
}

export default CommunityTabContent
