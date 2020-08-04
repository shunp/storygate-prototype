import * as React from 'react'
import { css } from '@emotion/core'
import { applyTheme } from 'src/themes/utils'
import { themes, DEFAULT_THEME } from 'src/themes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'
import CommunityBackground from './CommunityBackground'
import CommunityCaption from './CommunityCaption'
import SearchBar from '../SearchBar'
import { BasicTitleLine } from '../TitleLine'

const Members = ({ members, filterWords }) => {
  return members
    .filter(m => {
      if (filterWords.length === 0) {
        return true
      }
      const containInName = filterWords.map(f => m.name.toLowerCase().includes(f))
      const containInTitle = filterWords.map(f => m.title.toLowerCase().includes(f))
      const containInHobby = [false] // TODO: what should be
      const results = [...containInName, ...containInTitle, ...containInHobby]
      const finalResult = results.some(r => r)
      return finalResult
    })
    .map(member => {
      return <Member id={member.id} name={member.name} title={member.title} pageId={member.pageId} pic={member.pic} />
    })
}

const Member = ({ id, name, title, pageId, pic }) => {
  return (
    <div className="p-3 w-1/3">
      <Link to="/persons/owner" className="flex flex-col items-center">
        <img src={pic} width={140} className="w-24 h-24 rounded-full" />
        <div>{name}</div>
      </Link>
    </div>
  )
}

const CommunityBase = ({ name, number, introduction, members, backgroundImg }) => {
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
        <CommunityBackground />
        <CommunityCaption name={name} num={number} />
        <BasicTitleLine title="Search" Icon={<FontAwesomeIcon icon={faSearch} size="1x" className="text-white" />} />
        <SearchBar searchWord={searchWord} filter={filter} />
        <div id="search-result" className="flex flex-wrap w-full">
          <Members members={members} filterWords={filterWords} />
        </div>
      </div>
    </>
  )
}

export default CommunityBase
