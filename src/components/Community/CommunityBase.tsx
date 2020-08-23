import * as React from 'react'
import { applyTheme } from 'src/themes/utils'
import { themes, DEFAULT_THEME } from 'src/themes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Community } from 'src/services/interfaces/Community'
import { LoginUser } from 'src/services/interfaces/Auth'
import CommunityBackground from './CommunityBackground'
import CommunityCaption from './CommunityCaption'
import SearchBar from '../SearchBar'
import { BasicTitleLine } from '../TitleLine'
import { Members } from './Members'
import { Groups } from './Gorups'
import { AnnouncementComponent } from '../Common/Announcement'

interface CommunityBaseProps {
  community: Community
  loginUser: LoginUser
  createNewGroup: (name: string, introduction: string, backgroundImg?: Blob) => Promise<void>
  updateAnnouncement: (message: string) => Promise<void>
}
const CommunityBase: React.FC<CommunityBaseProps> = ({ community, loginUser, createNewGroup, updateAnnouncement }) => {
  const { name, backgroundImg, numOfMembers, members, groups } = community
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
        <CommunityBackground img={backgroundImg} />
        <CommunityCaption name={name} num={numOfMembers} />
        <AnnouncementComponent
          announcement={community.latestAnnoucement}
          joined={community.joined(loginUser.uid)}
          updateAnnouncement={updateAnnouncement}
        />
        <BasicTitleLine title="Member Search" Icon={<FontAwesomeIcon icon={faSearch} size="1x" className="text-white" />} />
        <SearchBar searchWord={searchWord} filter={filter} />
        <div id="search-result" className="flex flex-wrap w-full">
          <Members members={members} filterWords={filterWords} />
        </div>
        <BasicTitleLine title="Group List" />
        <div className="flex flex-wrap w-full">
          <Groups groups={groups} createNewGroup={createNewGroup} />
        </div>
      </div>
    </>
  )
}

export default CommunityBase
