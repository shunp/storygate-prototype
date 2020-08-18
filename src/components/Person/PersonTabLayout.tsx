import * as React from 'react'
import { css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faBook, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { Montserrat } from '../SGText'

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

const SocialBadgeList = () => {
  // TODO: DB
  const data = [
    // {
    //   serviceName: 'Facebook',
    //   serviceColor: 'social-facebook',
    //   imgUrl:
    //     'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/baiUK5z4NYhFscfuwpJuT7NTwZs2%2Fprofile.jpg?alt=media&token=56a52afe-7ca6-47f7-bbfb-c3139d2ae20d',
    //   link: 'https://www.facebook.com/shunpei.koike.9'
    // },
    // {
    //   serviceName: 'LinkedIn',
    //   serviceColor: 'social-linkedin',
    //   imgUrl:
    //     'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/baiUK5z4NYhFscfuwpJuT7NTwZs2%2Fprofile.jpg?alt=media&token=56a52afe-7ca6-47f7-bbfb-c3139d2ae20d',
    //   link: 'https://www.linkedin.com/in/shumpeikoike/'
    // },
    // {
    //   serviceName: 'Instagram',
    //   serviceColor: 'gradient-tl-instagram',
    //   imgUrl:
    //     'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/baiUK5z4NYhFscfuwpJuT7NTwZs2%2Fprofile.jpg?alt=media&token=56a52afe-7ca6-47f7-bbfb-c3139d2ae20d',
    //   link: 'https://www.linkedin.com/in/shumpeikoike/'
    // },
    // {
    //   serviceName: 'Note',
    //   serviceColor: 'social-note',
    //   imgUrl:
    //     'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/baiUK5z4NYhFscfuwpJuT7NTwZs2%2Fprofile.jpg?alt=media&token=56a52afe-7ca6-47f7-bbfb-c3139d2ae20d',
    //   link: 'https://www.linkedin.com/in/shumpeikoike/'
    // },
    // {
    //   serviceName: 'Twitter',
    //   serviceColor: 'social-twitter',
    //   imgUrl:
    //     'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/baiUK5z4NYhFscfuwpJuT7NTwZs2%2Fprofile.jpg?alt=media&token=56a52afe-7ca6-47f7-bbfb-c3139d2ae20d',
    //   link: 'https://www.linkedin.com/in/shumpeikoike/'
    // }
  ]
  const list = data.map(d => <SocialMediaBadge serviceName={d.serviceName} serviceColor={d.serviceColor} imgUrl={d.imgUrl} />)
  return <div className="flex flex-wrap mx-4">{list}</div>
}

const SocialMediaBadge = ({ serviceName, serviceColor, imgUrl }) => {
  return (
    <a href="#" className="w-1/2">
      <div className={`flex flex-row items-center bg-${serviceColor} rounded-full py-1 px-1 mt-2 mx-2`}>
        <img src={imgUrl} className="rounded-full w-8 mr-2" />
        <Montserrat className="text-white text-md font-bold">{serviceName}</Montserrat>
      </div>
    </a>
  )
}

const PersonTabLayout = ({ openTab, setOpenTab }) => {
  const currentTitle = tabTitle(openTab)
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
            <TabList openTab={openTab} setOpenTab={setOpenTab} index={1} icon={faList} />
            <TabList openTab={openTab} setOpenTab={setOpenTab} index={2} icon={faBook} />
            <TabList openTab={openTab} setOpenTab={setOpenTab} index={3} icon={faUserFriends} />
          </ul>
        </div>
        {openTab === 1 && (
          <div className="flex justify-start">
            <SocialBadgeList />
          </div>
        )}
      </div>
    </>
  )
}

export default PersonTabLayout
