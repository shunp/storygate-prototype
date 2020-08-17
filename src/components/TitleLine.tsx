import * as React from 'react'
import { css } from '@emotion/core'
import { Montserrat } from './SGText'
import 'src/styles/portfolio-title.css'

interface TitleLineProps {
  title: string
  time?: string
  Icon?: any
}

export const PortfolioTitle: React.FC<TitleLineProps> = ({ title }) => {
  return (
    <div id="line-title" className="flex flex-col w-full">
      <div id="logo">
        <div className="bar1" />
        <div className="bar2" />
        <div className="bar3" />
        <div className="bar4" />
        <div className="bar5" />
        <div className="logo-text-background" />
        <div className="logo-text">
          <Montserrat
            className="relative font-bold text-purple-c3 text-xl tracking-tight"
            css={css`
              left: -50%;
            `}
          >
            {title}
          </Montserrat>
        </div>
      </div>
    </div>
  )
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

export const ModifiableTitleLine = ({ title, onChange }) => {
  return (
    <div id="line-title" className="flex flex-col w-full mt-2">
      <div className="m-1 text-xs text-white">タイトル</div>
      <input
        type="text"
        placeholder="title..."
        className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-lg focus:outline-none"
        value={title}
        onChange={e => onChange('title', e.target.value)}
      />
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
export const ModifiableBallonTitleLine: React.FC<TitleLineProps> = ({ title, time, onChange }) => {
  return (
    <div id="ballon-title" className="flex flex-col w-full mt-2">
      <div className="m-1 text-xs text-white">時期</div>
      <input
        type="text"
        placeholder="title..."
        className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-lg focus:outline-none"
        value={time}
        onChange={e => onChange('time', e.target.value)}
      />
      <div className="m-1 text-xs text-white">タイトル</div>
      <input
        type="text"
        placeholder="title..."
        className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-lg focus:outline-none"
        value={title}
        onChange={e => onChange('title', e.target.value)}
      />
    </div>
  )
}
