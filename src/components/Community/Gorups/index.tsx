import * as React from 'react'
import { Link } from 'gatsby'
import { GroupReference } from 'src/services/interfaces/GroupCaption'
import { CreateGroupIcon } from './CreateNewGroup'

interface GroupProps {
  name: string
  pageId: string
  img?: string
}
const GroupView: React.FC<GroupProps> = ({ name, pageId, img }) => {
  return (
    <div className="p-3 w-1/3">
      <Link to={`/groups/${pageId}`} className="flex flex-col items-center">
        <img src={img} width={140} alt="" className="w-24 h-24 rounded-full" />
        <div>{name}</div>
      </Link>
    </div>
  )
}
interface GroupsProps {
  groups: GroupReference[]
  createNewGroup: (name: string, backgroundImg?: Blob) => Promise<void>
}
export const Groups: React.FC<GroupsProps> = ({ groups, createNewGroup }) => {
  const GroupComponents = groups.map(group => {
    return <GroupView name={group.name} pageId={group.pageId} img={group.backgroundImg} />
  })
  return (
    <>
      <CreateGroupIcon createNewGroup={createNewGroup} />
      {GroupComponents}
    </>
  )
}
