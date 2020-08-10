import * as React from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import { WithIFrame } from 'src/services/interfaces/Portfolio'
import { PortfolioContentProps } from 'src/components/Person/Portfolio/PortfolioContentBase'

export const TwitterIFrame: React.FC<PortfolioContentProps<WithIFrame>> = ({ iframeKey, size }) => {
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

export const TwitterChannel = () => {
  return <></>
}
