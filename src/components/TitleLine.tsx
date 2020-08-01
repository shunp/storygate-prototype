import * as React from 'react'
import { css } from '@emotion/core'

interface TitleLineProps {
  title: string
  Icon?: any
}
const TitleLine: React.FC<TitleLineProps> = ({ title, Icon }) => {
  return (
    <div id="search-title" className="flex flex-col w-full mt-2">
      <div
        className="font-semibold italic bg-primary text-white text-center py-2 shadow-lg text-lg"
        css={css`
          font-family: 'Lato', sans-serif;
        `}
      >
        {Icon}
        {title}
      </div>
    </div>
  )
}

export default TitleLine
