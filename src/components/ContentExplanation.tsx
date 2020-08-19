import * as React from 'react'
import 'src/styles/explanation.css'
import { useWindowSize } from 'src/utils/useWindowSize'
import { css } from '@emotion/core'

export const ContentExplanation = ({ text }) => {
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

export const ModifiableContentExplanation = ({ text, onChange }) => {
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
