import * as React from 'react'
import { css } from '@emotion/core'

export interface CaptionNameProps {
  name: string
}
const CaptionName: React.FC<CaptionNameProps> = ({ name }) => {
  return (
    <div id="profile-name" className="mt-2">
      <span
        className="font-semibold text-xl"
        css={css`
          font-family: noto-sans-cjk-jp, sans-serif;
          font-style: normal;
        `}
      >
        {name}
      </span>
    </div>
  )
}

export default CaptionName
