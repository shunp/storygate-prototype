import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Person } from 'src/services/interfaces/Person'
import { BasicTitleLine } from 'src/components/TitleLine'
import SearchBar from 'src/components/SearchBar'
import { Members } from './Members'

interface GroupMemberProps {
  members: Person[]
}
export const GroupMember: React.FC<GroupMemberProps> = ({ members }) => {
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
      <BasicTitleLine title="Member Search" Icon={<FontAwesomeIcon icon={faSearch} size="1x" className="text-white" />} />
      <SearchBar searchWord={searchWord} filter={filter} />
      <div id="search-result" className="flex flex-wrap w-full">
        <Members members={members} filterWords={filterWords} />
      </div>
    </>
  )
}
