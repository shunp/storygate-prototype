import * as React from 'react'
import { IframeProps } from 'src/services/interfaces/Provider'

export const GeneralURLIframe: React.FC<IframeProps> = ({ TitleLine, Explain, Location, fullURL, iframeKey, text, size }) => {
  return (
    <>
      {TitleLine}
      <div className="flex justify-center">
        <iframe
          className="relative z-10"
          title="otherURL"
          id="ytplayer"
          width={size}
          height={size ? size * 0.6 : 0}
          src={fullURL}
          scrolling="no"
          frameBorder="0"
        />
      </div>
      {Explain}
      {Location}
    </>
  )
}

export const GeneralURL: React.FC<IframeProps> = ({ TitleLine, Explain, Location, fullURL, pic, iframeKey, text, size }) => {
  return (
    <>
      {TitleLine}
      <div className="flex justify-center">
        <a href={fullURL} className="" aria-label="panel-link">
          <img alt="GeneralURL" src={pic} className="" />
        </a>
      </div>
      {Explain}
      {Location}
    </>
  )
}
