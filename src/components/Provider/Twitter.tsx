import * as React from 'react'
import { IframeProps } from 'src/services/interfaces/Provider'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import { WithIFrame } from 'src/services/interfaces/Portfolio'
import { WithPortfolioContentProps, asPortfolioContentIFrame } from 'src/components/Person/Portfolio/PortfolioContentBase'

const Iframe: React.FC<WithPortfolioContentProps<WithIFrame>> = ({ iframeKey, size }) => {
  return (
    <TwitterTweetEmbed
      tweetId={iframeKey}
      options={{ width: size }}
      onLoad={tweetWidgetEl => {
        if (tweetWidgetEl.children[0]) {
          tweetWidgetEl.children[0].style.width = `${size}px`
        }
        if (tweetWidgetEl.shadowRoot) {
          const tweetEl = tweetWidgetEl.shadowRoot.querySelector('.SandboxRoot')
          tweetEl.style.position = 'static'
        }
      }}
    />
  )
}
export const TwitterIFrame = asPortfolioContentIFrame(Iframe)

export const TwitterPost: React.FC<IframeProps> = ({ TitleLine, Explain, iframeKey, text, size }) => {
  return (
    <>
      {TitleLine}
      <div className="flex justify-center">
        <TwitterTweetEmbed
          tweetId={iframeKey}
          options={{ width: size }}
          onLoad={tweetWidgetEl => {
            if (tweetWidgetEl.children[0]) {
              tweetWidgetEl.children[0].style.width = `${size}px`
            }
            if (tweetWidgetEl.shadowRoot) {
              const tweetEl = tweetWidgetEl.shadowRoot.querySelector('.SandboxRoot')
              tweetEl.style.position = 'static'
            }
          }}
        />
      </div>
      {Explain}
    </>
  )
}

export const TwitterChannel = () => {
  return <></>
}
