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
import TitleLine from '../TitleLine'

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
      <Link to={`/${pageId}`}>
        <img src={pic} width={140} className="w-24 h-24 rounded-full" />
      </Link>
    </div>
  )
}

const CommunityBase = ({ name, number, introduction, backgroundImg }) => {
  // TODO: fetched data
  // TODO: filter
  const members = [
    {
      id: '1',
      name: '小池駿平',
      title: 'Software Engineer',
      pageId: 'owner',
      pic:
        'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/1sLl53hRd7Z0LDksz9iB%2Fprofile.jpg?alt=media&token=2e5eda6a-07c8-4fd4-bbc1-1a5a30f455f4'
    },
    {
      id: '2',
      name: '柳澤翔矢',
      title: 'Software Engineer',
      pageId: 'owner',
      pic:
        'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/443502378%2Fprofile.jpg?alt=media&token=bc87f7be-760d-4f9a-92e1-c6b2abc0eba4'
    },
    {
      id: '3',
      name: '松井大樹',
      title: 'UI Designer',
      pageId: 'owner',
      pic:
        'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/2092825305%2Fprofile.jpg?alt=media&token=6c27b6bf-b971-4eed-927f-6aa15552c74d'
    },
    {
      id: '4',
      name: 'Youichi Honda',
      title: 'チャリドクター',
      pageId: 'owner',
      pic:
        'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/Zps5pW9D0tifgako4WpM%2Fprofile.jpg?alt=media&token=85724c7e-771f-4519-aedb-90afefde43d4'
    },
    {
      id: '1',
      name: '小池駿平',
      title: 'Software Engineer',
      pageId: 'owner',
      pic:
        'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/1sLl53hRd7Z0LDksz9iB%2Fprofile.jpg?alt=media&token=2e5eda6a-07c8-4fd4-bbc1-1a5a30f455f4'
    },
    {
      id: '2',
      name: '柳澤翔矢',
      title: 'Software Engineer',
      pageId: 'owner',
      pic:
        'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/443502378%2Fprofile.jpg?alt=media&token=bc87f7be-760d-4f9a-92e1-c6b2abc0eba4'
    },
    {
      id: '3',
      name: '松井大樹',
      title: 'UI Designer',
      pageId: 'owner',
      pic:
        'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/2092825305%2Fprofile.jpg?alt=media&token=6c27b6bf-b971-4eed-927f-6aa15552c74d'
    },
    {
      id: '4',
      name: 'Youichi Honda',
      title: 'チャリドクター',
      pageId: 'owner',
      pic:
        'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/Zps5pW9D0tifgako4WpM%2Fprofile.jpg?alt=media&token=85724c7e-771f-4519-aedb-90afefde43d4'
    },
    {
      id: '1',
      name: '小池駿平',
      title: 'Software Engineer',
      pageId: 'owner',
      pic:
        'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/1sLl53hRd7Z0LDksz9iB%2Fprofile.jpg?alt=media&token=2e5eda6a-07c8-4fd4-bbc1-1a5a30f455f4'
    },
    {
      id: '2',
      name: '柳澤翔矢',
      title: 'Software Engineer',
      pageId: 'owner',
      pic:
        'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/443502378%2Fprofile.jpg?alt=media&token=bc87f7be-760d-4f9a-92e1-c6b2abc0eba4'
    },
    {
      id: '3',
      name: '松井大樹',
      title: 'UI Designer',
      pageId: 'owner',
      pic:
        'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/2092825305%2Fprofile.jpg?alt=media&token=6c27b6bf-b971-4eed-927f-6aa15552c74d'
    },
    {
      id: '4',
      name: 'Youichi Honda',
      title: 'チャリドクター',
      pageId: 'owner',
      pic:
        'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/Zps5pW9D0tifgako4WpM%2Fprofile.jpg?alt=media&token=85724c7e-771f-4519-aedb-90afefde43d4'
    }
  ]

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
        <TitleLine title="Search" Icon={<FontAwesomeIcon icon={faSearch} size="1x" className="text-white" />} />
        <SearchBar searchWord={searchWord} filter={filter} />
        <div id="search-result" className="flex flex-wrap w-full">
          <Members members={members} filterWords={filterWords} />
        </div>
      </div>
    </>
  )
}

export default CommunityBase
