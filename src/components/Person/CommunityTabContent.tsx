import * as React from 'react'
import { CommunityReference } from 'src/services/interfaces/Community'
import { CommunityList } from '../Content/Community'

interface CommunityTabProps {
  index: number
  openTab: number
  communities: CommunityReference[]
  size: number
  editing: boolean
}
const CommunityTabContent: React.FC<CommunityTabProps> = ({ index, openTab, communities, size, editing }) => {
  if (editing) {
    return (
      <div className={openTab === index ? 'block' : 'hidden'} id={`link${index}`}>
        <CommunityList communities={communities} size={size} />
      </div>
    )
  }
  return (
    <div className={openTab === index ? 'block' : 'hidden'} id={`link${index}`}>
      <CommunityList communities={communities} size={size} />
    </div>
  )
}

export default CommunityTabContent
