import * as React from 'react'
import { Group } from 'src/services/interfaces/Group'
import { GroupService } from 'src/services/GroupService'
import GroupPage from 'src/components/Group'

interface GroupPageLayoutOwnProps {
  path: string
  groupId: string
}

type GroupPageLayoutProps = GroupPageLayoutOwnProps
const GroupPageLayout: React.FC<GroupPageLayoutProps> = ({ groupId }) => {
  const [group, setGroup] = React.useState<Group>(GroupService.emptyGroup())
  React.useEffect(() => {
    if (!groupId) {
      return
    }
    GroupService.fetchById(groupId).then(fetched => setGroup(fetched))
  }, [groupId])

  return <GroupPage name={group.name} img={group.backgroundImg} number={group.numOfMembers} members={group.members} />
}

export default GroupPageLayout
