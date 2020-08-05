import * as React from 'react'
import { IframeProps } from 'src/services/interfaces/Provider'
import { ContentExplanation } from '../ContentExplanation'

export const Text: React.FC<IframeProps> = ({ TitleLine, iframeKey, text, size }) => {
  // TODO: background pic
  return (
    <>
      {TitleLine}
      <div className="flex justify-center">
        <span className="text-lg font-bold text-gray-600 mt-10">{iframeKey}</span>
      </div>
      <ContentExplanation text={text} />
    </>
  )
}
