import * as React from 'react'
import { css } from '@emotion/core'

const SGText = ({ children, className }) => {
  return (
    <div
      className={className}
      css={css`
        font-family: noto-sans-cjk-jp, sans-serif;
      `}
    >
      {children}
    </div>
  )
}

export default SGText
