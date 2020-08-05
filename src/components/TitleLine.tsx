import * as React from 'react'
import { css } from '@emotion/core'

interface TitleLineProps {
  title: string
  time?: string
  Icon?: any
}

export const BasicTitleLine: React.FC<TitleLineProps> = ({ title, Icon }) => {
  return (
    <div id="line-title" className="flex flex-col w-full mt-2">
      <div
        className="font-semibold italic bg-primary text-white text-center py-2 shadow-lg text-lg"
        css={css`
          font-family: 'Lato', sans-serif;
        `}
      >
        {Icon}
        {title}
      </div>
    </div>
  )
}

export const BallonTitleLine: React.FC<TitleLineProps> = ({ title, time }) => {
  return (
    <div id="ballon-title" className="flex flex-col w-full mt-2">
      <div
        className="relative bg-primary text-center py-2 shadow-lg"
        css={css`
          &:after {
            content: '';
            position: absolute;
            right: 0;
            bottom: -20px;
            left: 0;
            width: 0px;
            height: 0px;
            margin: auto;
            border-style: solid;
            border-color: var(--color-primary) transparent transparent transparent;
            border-width: 20px 40px 0 40px;
          }
        `}
      >
        <div className="italic text-white text-xs underline">{time}</div>
        <div className="font-semibold italic text-white text-lg">{title}</div>
      </div>
    </div>
  )
}

export const ModifiableTitleLine = ({ title }) => {
  const [inputTitle, setInputTitle] = React.useState(title)
  return (
    <div id="line-title" className="flex flex-col w-full mt-2">
      {/* <div className="m-1 text-xs">Title</div> */}
      <input
        type="text"
        placeholder="title..."
        className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-lg focus:outline-none"
        value={inputTitle}
        onChange={e => setInputTitle(e.target.value)}
      />
    </div>
  )
}
