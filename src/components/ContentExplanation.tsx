import * as React from 'react'
import 'src/styles/explanation-portfolio.css'
import 'src/styles/explanation-story.css'

import { useWindowSize } from 'src/utils/useWindowSize'
import { css } from '@emotion/core'

export const StoryExplanation = ({ title, text }) => {
  const size = useWindowSize()
  const { width } = size
  if (!text) {
    return <></>
  }
  return (
    <>
      <div id="layout-2">
        <div className="arrow" />
        <div className="arrow-down" />
        <div className="bar1" />
        <div className="bar2" />
        <div className="bar3" />
        <div className="bar4" />
      </div>
      <div
        id="layout-3"
        css={css`
          width: ${width * 0.8}px;
        `}
      >
        <div className="layer1">
          <div className="circle1">“</div>
          <div className="header-text">{title}</div>
          <div className="text">{text}</div>
          <div className="circle2">“</div>
        </div>
      </div>
    </>
  )
}

export const PortfolioExplanation = ({ text }) => {
  const size = useWindowSize()
  const { width } = size
  if (!text) {
    return <></>
  }
  return (
    <div>
      <div
        id="layout"
        css={css`
          width: ${width * 0.8}px;
        `}
      >
        <div className="layer1">
          <div className="layer-text">{text}</div>
        </div>
        <div className="layer2" />
        <div className="layer3" />
        <div className="layer4"> </div>
        <div className="quote1" />
        <div className="quote2" />
      </div>
    </div>
  )
}

export const ModifiablePortfolioExplanation = ({ text, onChange }) => {
  return (
    <div className="text-gray-500">
      <div className="m-1 text-xs text-white">説明</div>
      <textarea
        className="border-2 bordeer-gray-300 focus:outline-none bg-white h-20 w-full px-2 rounded-lg"
        value={text}
        placeholder="explanation..."
        onChange={e => onChange('text', e.target.value)}
      />
    </div>
  )
}
