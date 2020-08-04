import * as React from 'react'
import { IframeProps } from 'src/services/interfaces/Provider'
import ContentExplanation from '../ContentExplanation'
import TitleLine from '../TitleLine'

export const Text: React.FC<IframeProps> = ({ title, iframeKey, text, size }) => {
  // TODO: background pic
  return (
    <>
      <TitleLine title={title} />
      <div className="flex justify-center">
        <span className="text-lg font-bold text-gray-600 mt-4">{iframeKey}</span>
      </div>
      <ContentExplanation text={text} />
    </>
  )
}
