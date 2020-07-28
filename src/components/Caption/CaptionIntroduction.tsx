import * as React from 'react'
import { css } from '@emotion/core'

const CaptionIntroduction = () => {
  return (
    <div id="profile-introduction" className="mt-2">
      <span
        className="text-gray-500"
        css={css`
          font-family: noto-sans-cjk-jp, sans-serif;
          font-style: normal;
        `}
      >
        BlockchainやWebGLなど / AWS Best Architecture 2018 / 書籍「Solidityプログラミング」発売中 / 秋から香港で仮想世界構築の研究
      </span>
    </div>
  )
}

export default CaptionIntroduction
