import * as React from 'react'
import { css } from '@emotion/core'

const Background = ({ bgImg }) => {
  return (
    <div
      className="absolute w-full h-full"
      css={css`
        background-image: url(${bgImg});
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      `}
    >
      <div className="absolute w-full h-full bg-gradient-b-blue-pink-purple opacity-75" />
    </div>
  )
}

export default Background
