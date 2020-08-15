import * as React from 'react'
import { applyTheme } from 'src/themes/utils'
import { themes, DEFAULT_THEME } from 'src/themes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Person } from 'src/services/interfaces/Person'
import { GroupReference } from 'src/services/interfaces/GroupCaption'
import CommunityBackground from './CommunityBackground'
import CommunityCaption from './CommunityCaption'
import SearchBar from '../SearchBar'
import { BasicTitleLine } from '../TitleLine'
import { Members } from './Members'
import { Groups } from './Gorups'

interface CommunityBaseProps {
  name: string
  img: string
  number: number
  members: Person[]
  groups: GroupReference[]
  createNewGroup: (name: string, backgroundImg?: Blob) => Promise<void>
}
const CommunityBase: React.FC<CommunityBaseProps> = ({ name, img, number, members, groups, createNewGroup }) => {
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
        <CommunityBackground img={img} />
        <CommunityCaption name={name} num={number} />
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
