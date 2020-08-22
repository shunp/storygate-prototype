import * as React from 'react'
import { css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faBook, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { Montserrat } from '../SGText'
import { SocialBadgeList } from './SocialBadgeList'

const TabList = ({ openTab, setOpenTab, index, icon }) => {
  return (
    <li className="mt-2 mx-2 text-center">
      <a
        onClick={e => {
          e.preventDefault()
          setOpenTab(index)
        }}
        data-toggle="tab"
        href="#link1"
        role="tablist"
      >
        <FontAwesomeIcon icon={icon} size="lg" className={` ${openTab === index ? 'text-primary' : 'text-secondary'}`} />
      </a>
    </li>
  )
}

const tabTitle = (openTab: number) => {
  if (openTab === 1) return 'Portfolio'
  if (openTab === 2) return 'Story'
  if (openTab === 3) return 'Community'
  return 'Portfolio'
}

export const resolveCurrentTab = (openTab: number, editingPortfolio: boolean, editingStory: boolean, editingCommunity: boolean) => {
  if (editingPortfolio) return 1
  if (editingStory) return 2
  if (editingCommunity) return 3
  return openTab
}

const PersonTabLayout = ({ openTab, setOpenTab, editingPortfolio, editingStory, editingCommunity }) => {
  const currentTab = resolveCurrentTab(openTab, editingPortfolio, editingStory, editingCommunity)
  const currentTitle = tabTitle(currentTab)
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
          <Montserrat className="text-2xl font-bold text-white">{currentTitle}</Montserrat>
          <ul className="flex mb-0 list-none pb-4 flex-row" role="tablist">
            <TabList openTab={currentTab} setOpenTab={setOpenTab} index={1} icon={faList} />
            <TabList openTab={currentTab} setOpenTab={setOpenTab} index={2} icon={faBook} />
            <TabList openTab={currentTab} setOpenTab={setOpenTab} index={3} icon={faUserFriends} />
          </ul>
        </div>
      </div>
    </>
  )
}

export default PersonTabLayout
