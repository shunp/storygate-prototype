import * as React from 'react'
import { applyTheme } from 'src/themes/utils'
import { themes, DEFAULT_THEME } from 'src/themes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Group } from 'src/services/interfaces/Group'
import { CommunityReference } from 'src/services/interfaces/CommunityCaption'
import GroupBackground from './GroupBackground'
import GroupCaption from './GroupCaption'
import SearchBar from '../SearchBar'
import { BasicTitleLine } from '../TitleLine'
import { Members } from './Members'
import CommunityBackground from '../Community/CommunityBackground'
import CommunityCaption from '../Community/CommunityCaption'

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
  community?: CommunityReference
  loggedIn: boolean
  joined: boolean
  joinGroup: () => Promise<void>
}
const GroupBase: React.FC<GroupBaseProps> = ({ group, community, loggedIn, joined, joinGroup }) => {
  React.useEffect(() => {
    applyTheme(DEFAULT_THEME, themes)
  }, [])

  const [searchWord, setSearchWord] = React.useState('')
  const [filterWords, setFilterWords] = React.useState<string[]>([])

  const filter = (target: string) => {
    setSearchWord(target)
    const words = target
      .split(' ')
      .filter(w => !!w)
      .map(w => w.toLowerCase())
    setFilterWords(words)
  }

  return (
    <>
      <div className="flex justify-center items-center flex-col mt-16">
        <GroupBackground img={group.backgroundImg} />
        <GroupCaption name={group.name} num={group.numOfMembers} />
        <JoinGroupButton loggedIn={loggedIn} joined={joined} joinGroup={joinGroup} />
        <BasicTitleLine title="Member Search" Icon={<FontAwesomeIcon icon={faSearch} size="1x" className="text-white" />} />
        <SearchBar searchWord={searchWord} filter={filter} />
        <div id="search-result" className="flex flex-wrap w-full">
          <Members members={group.members} filterWords={filterWords} />
        </div>
        {community ? (
          <>
            <BasicTitleLine title="Community" />
            <CommunityBackground img={community.backgroundImg} />
            <CommunityCaption name={community.name} num={community.numOfMembers} />
          </>
        ) : (
          ''
        )}
      </div>
    </>
  )
}

export default GroupBase
