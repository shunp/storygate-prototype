import * as React from 'react'
import { applyTheme } from 'src/themes/utils'
import { themes, DEFAULT_THEME } from 'src/themes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Person } from 'src/services/interfaces/Person'
import GroupBackground from './GroupBackground'
import GroupCaption from './GroupCaption'
import SearchBar from '../SearchBar'
import { BasicTitleLine } from '../TitleLine'
import { Members } from './Members'

interface JoinGroupButtonProps {
  joinGroup: () => Promise<void>
}
const JoinGroupButton: React.FC<JoinGroupButtonProps> = ({ joinGroup }) => {
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
  name: string
  img: string
  number: number
  members: Person[]
  joinGroup: () => Promise<void>
}
const GroupBase: React.FC<GroupBaseProps> = ({ name, img, number, members, joinGroup }) => {
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
        <GroupBackground img={img} />
        <GroupCaption name={name} num={number} />
        <JoinGroupButton joinGroup={joinGroup} />
        <BasicTitleLine title="Member Search" Icon={<FontAwesomeIcon icon={faSearch} size="1x" className="text-white" />} />
        <SearchBar searchWord={searchWord} filter={filter} />
        <div id="search-result" className="flex flex-wrap w-full">
          <Members members={members} filterWords={filterWords} />
        </div>
      </div>
    </>
  )
}

export default GroupBase
