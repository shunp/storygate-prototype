import * as React from 'react'
import { css } from '@emotion/core'

const BackgroundImg = ({ profileImg }) => {
  return (
    <img
      src={profileImg}
      className="absolute z-001 w-full"
      css={css`
        background: transparent linear-gradient(0deg, #00000000 0%, #00000099 100%) 0% 0% no-repeat padding-box;
      `}
      alt=""
    />
  )
}

const BackgroundCover = () => {
  return (
    <div className="absolute z-01 w-full">
      <div
        className="h-40"
        css={css`
          background: transparent linear-gradient(0deg, #00000000 0%, #00000099 100%) 0% 0% no-repeat padding-box;
        `}
      />
      <div className="relative h-56">
        <div
          className="absolute inset-x-0 bottom-0 h-40"
          css={css`
            background: transparent linear-gradient(0deg, #00000099 0%, #00000000 100%) 0% 0% no-repeat padding-box;
            box-shadow: 0px 3px 6px #00000029;
          `}
        />
      </div>
    </div>
  )
}

const CaptionWrapper = ({ children, profileImg = '', editing = false }) => {
  return (
    <div className="w-full h-full">
      {!editing && (
        <>
          <BackgroundImg profileImg={profileImg} />
          <BackgroundCover />
        </>
      )}
      <div id="caption" className="flex items-start px-6 pt-56">
        {children}
      </div>
    </div>
  )
}

export default CaptionWrapper
