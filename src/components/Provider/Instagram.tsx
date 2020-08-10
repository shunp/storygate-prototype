import * as React from 'react'
import { IframeProps } from 'src/services/interfaces/Provider'
import InstagramEmbed from 'react-instagram-embed'
import { WithIFrame } from 'src/services/interfaces/Portfolio'
import { ContentExplanation } from '../ContentExplanation'
import { PortfolioContentProps, asPortfolioContentIFrame } from '../Person/Portfolio/PortfolioContentBase'

const Iframe: React.FC<PortfolioContentProps<WithIFrame>> = ({ iframeKey, size }) => {
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
export const InstagramIFrame = asPortfolioContentIFrame(Iframe)

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
      <ContentExplanation text={text} />
    </>
  )
}

export const InstagramChannel = () => {
  return <></>
}
