import * as React from 'react'
import { css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faBook, faUserFriends, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { ContentType } from 'src/services/interfaces/Content'
import { Montserrat } from '../SGText'

interface TabListProps {
  currentTab: ContentType
  setCurrentTab: React.Dispatch<React.SetStateAction<ContentType>>
  content: ContentType
  icon: IconDefinition
}
const TabList: React.FC<TabListProps> = ({ currentTab, setCurrentTab, content, icon }) => {
  return (
    <li className="mt-2 mx-2 text-center">
      <a
        onClick={e => {
          e.preventDefault()
          setCurrentTab(content)
        }}
        data-toggle="tab"
        href="#link1"
        role="tablist"
      >
        <FontAwesomeIcon icon={icon} size="lg" className={` ${currentTab === content ? 'text-primary' : 'text-secondary'}`} />
      </a>
    </li>
  )
}

interface PersonTabLayoutProps {
  currentTab: ContentType
  setCurrentTab: React.Dispatch<React.SetStateAction<ContentType>>
}
const PersonTabLayout: React.FC<PersonTabLayoutProps> = ({ currentTab, setCurrentTab }) => {
  return (
    <>
      <div
        id="main-tab"
        className="absolute w-full pt-4 px-6 h-48"
        css={css`
          background: transparent linear-gradient(180deg, #1f1f1f 0%, #ffffff 100%) 0% 0% no-repeat padding-box;
        `}
      />
      <div className="relative">
        <div className="flex justify-between my-4 mx-4">
          <Montserrat className="text-2xl font-bold text-white">{currentTab}</Montserrat>
          <ul className="flex mb-0 list-none pb-4 flex-row" role="tablist">
            <TabList currentTab={currentTab} setCurrentTab={setCurrentTab} content="Portfolio" icon={faList} />
            <TabList currentTab={currentTab} setCurrentTab={setCurrentTab} content="Story" icon={faBook} />
            <TabList currentTab={currentTab} setCurrentTab={setCurrentTab} content="Community" icon={faUserFriends} />
          </ul>
        </div>
      </div>
    </>
  )
}

export default PersonTabLayout
