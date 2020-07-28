import * as React from 'react'
import { css } from '@emotion/core'

const CaptionName = () => {
  return (
    <div id="profile-name" className="mt-2">
      <span
        className="font-semibold text-xl"
        css={css`
          font-family: noto-sans-cjk-jp, sans-serif;
          font-style: normal;
        `}
      >
        小池 駿平
      </span>
    </div>
  )
}

export default CaptionName
