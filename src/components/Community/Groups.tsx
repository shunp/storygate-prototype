import * as React from 'react'
import { Group } from 'src/services/interfaces/Group'

interface GroupProps {
  name: string
  pageId: string
  img?: string
}
const GroupView: React.FC<GroupProps> = ({ name, pageId, img }) => {
  return (
    <div className="p-3 w-1/3">
      <img src={img} width={140} alt="" className="w-24 h-24 rounded-full" />
      <div>{name}</div>
    </div>
  )
}
interface GroupsProps {
  groups: Group[]
}
export const Groups: React.FC<GroupsProps> = ({ groups }) => {
  const GroupComponents = groups.map(group => {
    return <GroupView name={group.name} pageId={group.pageId} img={group.backgroundImg} />
  })
  return <>{GroupComponents}</>
}
