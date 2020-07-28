import * as React from 'react'
import { css } from '@emotion/core'

const PersonTabLayout = ({ openTab, setOpenTab }) => {
  return (
    <div id="main-tab" className="flex flex-wrap">
      <div className="w-full">
        <ul className="flex mb-0 list-none pt-3 pb-4 flex-row" role="tablist">
          <li className="mx-1 w-1/3 text-center">
            <a
              className={`text-xs font-bold uppercase px-2 py-2 shadow-lg rounded block leading-normal ${
                openTab === 1 ? 'text-white bg-primary' : 'text-primary bg-white'
              }`}
              onClick={e => {
                e.preventDefault()
                setOpenTab(1)
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
              css={css`
                font-family: 'Lato', sans-serif;
              `}
            >
              Portfolio
            </a>
          </li>
          <li className="mx-1 w-1/3 text-center">
            <a
              className={`text-xs font-bold uppercase px-5 py-2 shadow-lg rounded block leading-normal ${
                openTab === 2 ? 'text-white bg-primary' : 'text-primary bg-white'
              }`}
              onClick={e => {
                e.preventDefault()
                setOpenTab(2)
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
              css={css`
                font-family: 'Lato', sans-serif;
              `}
            >
              Story
            </a>
          </li>
          <li className="mx-1 w-1/3 text-center">
            <a
              className={`text-xs font-bold uppercase px-5 py-2 shadow-lg rounded block leading-normal ${
                openTab === 3 ? 'text-white bg-primary' : 'text-primary bg-white'
              }`}
              onClick={e => {
                e.preventDefault()
                setOpenTab(3)
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
              css={css`
                font-family: 'Lato', sans-serif;
              `}
            >
              Community
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PersonTabLayout
