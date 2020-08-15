import * as React from 'react'
import { Community } from 'src/services/interfaces/Community'
import { CommunityService } from 'src/services/CommunityService'
import CommunityPage from 'src/components/Community'

interface CommunityPageLayoutOwnProps {
  path: string
  communityId: string
}

type CommunityPageLayoutProps = CommunityPageLayoutOwnProps
const CommunityPageLayout: React.FC<CommunityPageLayoutProps> = ({ communityId }) => {
  const [community, setCommunity] = React.useState<Community>(CommunityService.emptyCommunity())
  React.useEffect(() => {
    CommunityService.fetchById(communityId).then(fetched => setCommunity(fetched))
  }, [communityId])

  return <CommunityPage name={community.name} number={community.numOfMembers} members={community.members} />
}

export default CommunityPageLayout
