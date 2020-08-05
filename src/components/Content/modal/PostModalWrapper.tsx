import * as React from 'react'
import { css } from '@emotion/core'

const modalCss = css`
  transition: opacity 0.25s ease;
`

const PostModalWrapper = ({ children }) => {
  return (
    <div
      css={modalCss}
      className="post-modal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center z-40"
    >
      {children}
    </div>
  )
}

export default PostModalWrapper
