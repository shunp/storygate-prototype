import * as React from 'react'
import { css } from '@emotion/core'

const Heading = ({ children }) => {
  return (
    <div
      className="h-full text-white text-lg font-bold my-1"
      css={css`
        font-family: 'Lato', sans-serif;
      `}
    >
      {children}
    </div>
  )
}
export default Heading
