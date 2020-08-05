import * as React from 'react'
import { IframeProps } from 'src/services/interfaces/Provider'

const YouTubeIframe = ({ iframeKey, size }) => {
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

export const YouTubePost: React.FC<IframeProps> = ({ TitleLine, Explain, iframeKey, text, size }) => {
  return (
    <>
      {TitleLine}
      <div className="flex justify-center">
        <YouTubeIframe iframeKey={iframeKey} size={size} />
      </div>
      {Explain}
    </>
  )
}

export const YouTubeChannel = () => {
  return <></>
}
