import * as React from 'react'
import { css } from '@emotion/core'

const Logo = ({ children }) => {
  return (
    <div
      className="h-full text-white text-5xl font-serif italic my-2"
      css={css`
        /* font-family: livermore-script-atf, sans-serif; */
        font-style: italic;
        font-weight: 400;
      `}
    >
      {children}
    </div>
  )
}

export default Logo
