import * as React from 'react'
import { IframeProps } from 'src/services/interfaces/Provider'
import InstagramEmbed from 'react-instagram-embed'
import { WithIFrame } from 'src/services/interfaces/Portfolio'
import { PortfolioContentProps } from 'src/components/Person/Portfolio/PortfolioContentBase'
import { PortfolioExplanation } from '../ContentExplanation'

export const InstagramIframe: React.FC<PortfolioContentProps<WithIFrame>> = ({ iframeKey, size }) => {
  return (
    <InstagramEmbed
      url={`https://www.instagram.com/p/${iframeKey}/`}
      maxWidth={size}
      hideCaption
      containerTagName="div"
      protocol=""
      onLoading={() => {}}
      onSuccess={() => {}}
      onAfterRender={() => {}}
      onFailure={() => {}}
    />
  )
}

export const InstagramPost: React.FC<IframeProps> = ({ TitleLine, iframeKey, text, size }) => {
  return (
    <>
      {TitleLine}
      <div className="flex justify-center">
        <InstagramEmbed
          url={`https://www.instagram.com/p/${iframeKey}/`}
          maxWidth={size}
          hideCaption
          containerTagName="div"
          protocol=""
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      </div>
      <PortfolioExplanation text={text} />
    </>
  )
}

export const InstagramChannel = () => {
  return <></>
}
