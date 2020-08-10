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

export const Noto = ({ children, className }) => {
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

export const Montserrat = ({ children, className }) => {
  return (
    <div
      className={className}
      css={css`
        font-family: Montserrat;
      `}
    >
      {children}
    </div>
  )
}

export default SGText
