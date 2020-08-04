import * as React from 'react'
import { css } from '@emotion/core'

const TabList = ({ openTab, setOpenTab, index, name }) => {
  return (
    <li className="mx-1 w-1/3 text-center">
      <a
        className={`text-xs font-bold uppercase px-2 py-2 shadow-lg rounded block leading-normal ${
          openTab === index ? 'text-white bg-primary' : 'text-primary bg-white'
        }`}
        onClick={e => {
          e.preventDefault()
          setOpenTab(index)
        }}
        data-toggle="tab"
        href="#link1"
        role="tablist"
        css={css`
          font-family: 'Lato', sans-serif;
        `}
      >
        {name}
      </a>
    </li>
  )
}

const PersonTabLayout = ({ openTab, setOpenTab }) => {
  return (
    <div id="main-tab" className="flex flex-wrap">
      <div className="w-full">
        <ul className="flex mb-0 list-none pt-3 pb-4 flex-row" role="tablist">
          <TabList openTab={openTab} setOpenTab={setOpenTab} index={1} name="Portfolio" />
          <TabList openTab={openTab} setOpenTab={setOpenTab} index={2} name="Story" />
          <TabList openTab={openTab} setOpenTab={setOpenTab} index={3} name="Community" />
        </ul>
      </div>
    </div>
  )
}

export default PersonTabLayout
