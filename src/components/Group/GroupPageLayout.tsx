import * as React from 'react'
import { connect } from 'react-redux'
import { State } from 'src/state'
import { Group } from 'src/services/interfaces/Group'
import { GroupService } from 'src/services/GroupService'
import GroupPage from 'src/components/Group'
import { LoginUser } from 'src/services/interfaces/Auth'

interface GroupPageLayoutState {
  loginUser: LoginUser
}
interface GroupPageLayoutOwnProps {
  path: string
  groupId: string
}

type GroupPageLayoutProps = GroupPageLayoutState & GroupPageLayoutOwnProps
const GroupPageLayout: React.FC<GroupPageLayoutProps> = ({ loginUser, groupId }) => {
  const [group, setGroup] = React.useState<Group>(GroupService.emptyGroup())
  const reload = () => {
    if (!groupId) {
      return
    }
    GroupService.fetchById(groupId).then(fetched => setGroup(fetched))
  }
  const joinGroup = async () => {
    await GroupService.join(groupId, loginUser.uid)
    reload()
  }
  const updateAnnouncement = async (message: string) => {
    await GroupService.updateAnnouncement(groupId, loginUser.uid, message)
    reload()
  }
  React.useEffect(() => {
    reload()
  }, [groupId])

  return <GroupPage group={group} loginUser={loginUser} joinGroup={joinGroup} updateAnnouncement={updateAnnouncement} />
}

export default connect<GroupPageLayoutState, {}, GroupPageLayoutOwnProps, State>(
  (state, props) => ({
    loginUser: state.app.loginUser,
    path: props.path,
    groupId: props.groupId
  }),
  {}
)(GroupPageLayout)
