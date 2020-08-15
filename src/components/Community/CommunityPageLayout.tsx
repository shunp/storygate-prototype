import * as React from 'react'
import { connect } from 'react-redux'
import { State } from 'src/state'
import { Community } from 'src/services/interfaces/Community'
import { CommunityService } from 'src/services/CommunityService'
import CommunityPage from 'src/components/Community'
import { LoginUser } from 'src/services/interfaces/Auth'

interface CommunityPageLayoutState {
  loginUser: LoginUser
}
interface CommunityPageLayoutOwnProps {
  path: string
  communityId: string
}

type CommunityPageLayoutProps = CommunityPageLayoutState & CommunityPageLayoutOwnProps
const CommunityPageLayout: React.FC<CommunityPageLayoutProps> = ({ loginUser, communityId }) => {
  const [community, setCommunity] = React.useState<Community>(CommunityService.emptyCommunity())
  const reloadCommunity = () => CommunityService.fetchById(communityId).then(fetched => setCommunity(fetched))
  const createNewGroup = async (name: string, backgroundImg?: Blob) => {
    await CommunityService.createNewGroup(communityId, loginUser.uid, name, backgroundImg)
    reloadCommunity()
  }
  React.useEffect(() => {
    reloadCommunity()
  }, [communityId])

  return (
    <CommunityPage
      name={community.name}
      img={community.backgroundImg}
      number={community.numOfMembers}
      members={community.members}
      groups={community.groups}
      createNewGroup={createNewGroup}
    />
  )
}

export default connect<CommunityPageLayoutState, {}, CommunityPageLayoutOwnProps, State>(
  (state, props) => ({
    loginUser: state.app.loginUser,
    path: props.path,
    communityId: props.communityId
  }),
  {}
)(CommunityPageLayout)
