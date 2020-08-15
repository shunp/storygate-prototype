import * as React from 'react'
import { Link } from 'gatsby'
import { display } from 'src/utils/numeral'
import { CommunityReference } from 'src/services/interfaces/Community'

interface CommunityPanelProps {
  pageId: string
  name: string
  num: number
}

const CommunityPanel: React.FC<CommunityPanelProps> = ({ pageId, name, num }) => {
  return (
    <div className="font-semibold italic text-primary text-center py-3 shadow-lg">
      <Link to={`/communities/${pageId}`}>
        {name} ({display(num)}人)
      </Link>
    </div>
  )
}

interface CommunityListProps {
  communities: CommunityReference[]
  size: number
}
export const CommunityList: React.FC<CommunityListProps> = ({ communities, size }) => {
  if (!communities) {
    return <></>
  }
  const CommuntyComponents = communities.map(d => <CommunityPanel pageId={d.pageId} name={d.name} num={d.numOfMembers} />)
  return <>{CommuntyComponents}</>
}
