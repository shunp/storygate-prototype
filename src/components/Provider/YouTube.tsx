import * as React from 'react'
import { PortfolioContentProps } from 'src/components/Person/Portfolio/PortfolioContentBase'
import { WithIFrame } from 'src/services/interfaces/Portfolio'

export const YouTubeIFrame: React.FC<PortfolioContentProps<WithIFrame>> = ({ iframeKey, size }) => {
  return (
    <iframe
      className="relative z-10"
      title="youtube"
      id="ytplayer"
      width={size}
      height={size ? size * 0.6 : 0}
      src={`https://www.youtube.com/embed/${iframeKey}`}
      frameBorder="0"
    />
  )
}

export const YouTubeChannel = () => {
  return <></>
}
