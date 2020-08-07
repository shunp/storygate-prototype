import * as React from 'react'
import { css } from '@emotion/core'

const Logo = ({ children }) => {
  return (
    <div
      className="h-full text-white text-5xl my-2"
      css={css`
        font-family: 'livermore-script-atf', sans-serif;
        font-style: normal;
        font-weight: 400;
      `}
    >
      {children}
    </div>
  )
}

export default Logo
