import * as React from 'react'
import { Link } from 'gatsby'
import { GroupReference } from 'src/services/interfaces/GroupCaption'
import { display } from 'src/utils/numeral'
import { CreateGroupIcon } from './CreateNewGroup'

interface GroupProps {
  name: string
  pageId: string
  num: number
  img?: string
}
const GroupView: React.FC<GroupProps> = ({ name, pageId, num, img }) => {
  return (
    <div className="p-3 w-1/3">
      <Link to={`/groups/${pageId}`} className="flex flex-col items-center">
        <img src={img} width={140} alt="" className="w-24 h-24 rounded-full" />
        <div>{name}</div>
        <div>{display(num)}人</div>
      </Link>
    </div>
  )
}
interface GroupsProps {
  groups: GroupReference[]
  createNewGroup: (name: string, introduction: string, backgroundImg?: Blob) => Promise<void>
}
export const Groups: React.FC<GroupsProps> = ({ groups, createNewGroup }) => {
  const GroupComponents = groups.map(group => {
    return <GroupView key={group.pageId} name={group.name} pageId={group.pageId} num={group.numOfMembers} img={group.backgroundImg} />
  })
  return (
    <>
      <CreateGroupIcon createNewGroup={createNewGroup} />
      {GroupComponents}
    </>
  )
}
