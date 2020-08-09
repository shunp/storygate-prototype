import * as React from 'react'
import { IframeProps } from 'src/services/interfaces/Provider'
import { asPortfolioContentIFrame, WithPortfolioContentProps } from 'src/components/Person/Portfolio/PortfolioContentBase'
import { PortfolioContent, WithIFrame } from 'src/services/interfaces/Portfolio'

const Iframe: React.FC<WithPortfolioContentProps<WithIFrame>> = ({ iframeKey, size }) => {
  return (
    <div className="flex justify-center">
      <iframe
        className="relative z-10"
        title="youtube"
        id="ytplayer"
        width={size}
        height={size ? size * 0.6 : 0}
        src={`https://www.youtube.com/embed/${iframeKey}`}
        frameBorder="0"
      />
    </div>
  )
}
export const YouTubeIFrame = asPortfolioContentIFrame(Iframe)

export const YouTubeChannel = () => {
  return <></>
}
