import * as React from 'react'
import { IframeProps } from 'src/services/interfaces/Provider'
import { PortfolioContentProps } from 'src/components/Person/Portfolio/PortfolioContentBase'
import { WithIFrame } from 'src/services/interfaces/Portfolio'
import { PortfolioExplanation } from '../ContentExplanation'
import 'src/styles/explanation-freetext.css'

export const TextIFrame: React.FC<PortfolioContentProps<WithIFrame>> = ({ iframeKey, size }) => {
  return (
    <div id="layout-1">
      <div className="layer1">
        <div className="layer1-inside" />
      </div>
      <div className="layer2">
        <div className="text">{iframeKey}</div>
      </div>
    </div>
  )
}

export const Text: React.FC<IframeProps> = ({ TitleLine, iframeKey, text, size }) => {
  // TODO: background pic
  return (
    <>
      {TitleLine}
      <div className="flex justify-center">
        <span className="text-lg font-bold text-gray-600 mt-10">{iframeKey}</span>
      </div>
      <PortfolioExplanation text={text} />
    </>
  )
}
