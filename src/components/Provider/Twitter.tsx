import * as React from 'react'
import TitleLine from 'src/components/TitleLine'
import { IframeProps } from 'src/services/interfaces/Provider'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import ContentExplanation from '../ContentExplanation'

export const TwitterPost: React.FC<IframeProps> = ({ title, iframeKey, text, size }) => {
  return (
    <>
      <TitleLine title={title} />
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
      <ContentExplanation text={text} />
    </>
  )
}

export const TwitterChannel = () => {
  return <></>
}
