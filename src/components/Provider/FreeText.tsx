import * as React from 'react'
import { IframeProps } from 'src/services/interfaces/Provider'
import { PortfolioContentProps } from 'src/components/Person/Portfolio/PortfolioContentBase'
import { WithIFrame } from 'src/services/interfaces/Portfolio'
import { ContentExplanation } from '../ContentExplanation'

export const TextIFrame: React.FC<PortfolioContentProps<WithIFrame>> = ({ iframeKey, size }) => {
  return <span className="text-lg font-bold text-gray-600 mt-10">{iframeKey}</span>
}

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
