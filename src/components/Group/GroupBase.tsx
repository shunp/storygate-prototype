import * as React from 'react'
import { applyTheme } from 'src/themes/utils'
import { themes, DEFAULT_THEME } from 'src/themes'
import { Group } from 'src/services/interfaces/Group'
import { LoginUser } from 'src/services/interfaces/Auth'
import GroupBackground from './GroupBackground'
import GroupCaption from './GroupCaption'
import { ChatGroup } from '../Chat'
import { GroupMember } from './GroupMember'
import { GroupCommunity } from './GroupCommunity'
import { GroupAnnounce } from './GroupAnnounce'

interface JoinGroupButtonProps {
  joinGroup: () => Promise<void>
  loggedIn: boolean
  joined: boolean
}
const JoinGroupButton: React.FC<JoinGroupButtonProps> = ({ loggedIn, joined, joinGroup }) => {
  if (!loggedIn || joined) {
    return <></>
  }
  return (
    <button
      type="button"
      onClick={() => joinGroup()}
      className="p-1 w-32 flex flex-col items-center border-2 bordeer-gray-300 focus:outline-none bg-white rounded-lg"
    >
      <span className="text-primary leading-normal">Join</span>
    </button>
  )
}

interface GroupBaseProps {
  group: Group
  loginUser: LoginUser
  joinGroup: () => Promise<void>
}
const GroupBase: React.FC<GroupBaseProps> = ({ group, loginUser, joinGroup }) => {
  React.useEffect(() => {
    applyTheme(DEFAULT_THEME, themes)
  }, [])

  const joined = group.joined(loginUser.uid)

  return (
    <>
      <div className="flex justify-center items-center flex-col mt-16">
        <GroupBackground img={group.backgroundImg} />
        <GroupCaption name={group.name} introduction={group.introduction} num={group.numOfMembers} />
        {joined ? <ChatGroup loginUser={loginUser} roomId={group.pageId} /> : ''}
        <JoinGroupButton loggedIn={loginUser.loggedIn} joined={joined} joinGroup={joinGroup} />
        <GroupAnnounce announcement={group.latestAnnoucement} />
        <GroupMember members={group.members} />
        <GroupCommunity community={group.community} />
      </div>
    </>
  )
}

export default GroupBase
