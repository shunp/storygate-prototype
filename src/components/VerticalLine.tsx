import * as React from 'react'
import { css } from '@emotion/core'

const VerticalLine = () => {
  return (
    <div
      className="my-1 mx-2"
      css={css`
        width: 1px;
        height: 42px;
        background-color: white;
      `}
    />
  )
}
export default VerticalLine
