import * as React from 'react'
import { WithPicture, WithIFrame } from 'src/services/interfaces/Portfolio'
import {
  asPortfolioContentPicture,
  PortfolioContentProps,
  asPortfolioContentIFrame
} from 'src/components/Person/Portfolio/PortfolioContentBase'

const Iframe: React.FC<PortfolioContentProps<WithIFrame>> = ({ iframeKey, size }) => {
  return (
    <iframe
      className="relative z-10"
      title="otherURL"
      id="ytplayer"
      width={size}
      height={size ? size * 0.6 : 0}
      src={iframeKey}
      scrolling="no"
      frameBorder="0"
    />
  )
}
export const GeneralURLIframe = asPortfolioContentIFrame(Iframe)

const GeneralURL: React.FC<PortfolioContentProps<WithPicture>> = ({ fullURL, pic }) => {
  return (
    <a href={fullURL} className="" aria-label="panel-link">
      <img alt="GeneralURL" src={pic} className="" />
    </a>
  )
}
export const GeneralURLContent = asPortfolioContentPicture(GeneralURL)
