import * as React from 'react'
import { css } from '@emotion/core'

const Logo = ({ children, className }) => {
  return (
    <div
      className={className}
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
