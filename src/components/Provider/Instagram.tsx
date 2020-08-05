import * as React from 'react'
import { IframeProps } from 'src/services/interfaces/Provider'
import InstagramEmbed from 'react-instagram-embed'
import { ContentExplanation } from '../ContentExplanation'

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
