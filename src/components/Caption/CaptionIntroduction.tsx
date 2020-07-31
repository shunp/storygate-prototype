import * as React from 'react'
import { css } from '@emotion/core'

export interface CaptionIntroductionProps {
  introduction: string
}
const CaptionIntroduction: React.FC<CaptionIntroductionProps> = ({ introduction }) => {
  return (
    <div id="profile-introduction" className="mt-2">
      <span
        className="text-gray-500"
        css={css`
          font-family: noto-sans-cjk-jp, sans-serif;
          font-style: normal;
        `}
      >
        {introduction}
      </span>
    </div>
  )
}

export default CaptionIntroduction
