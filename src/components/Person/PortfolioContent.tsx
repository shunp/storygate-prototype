import * as React from 'react'
import { YouTubeIFrame } from 'src/components/Provider/YouTube'
import { PortfolioContent } from 'src/services/interfaces/Portfolio'
import { PortfolioContentWrapper, PortfolioContentProps } from './Portfolio/PortfolioContentBase'
import { TwitterIFrame } from '../Provider/Twitter'

const PortfolioContentComponentSelector = (type: string): React.FC<PortfolioContentProps<any>> => {
  switch (type) {
    case 'YouTubePost':
      return YouTubeIFrame
    case 'TwitterPost':
      return TwitterIFrame
    // case 'GeneralUrl':
    //   return PortfolioContentPictureBase
    default:
      return <></>
  }
}
export interface PortfolioContentComponentProps<T = {}> {
  content: PortfolioContent<T>
  size: number
  editing?: boolean
}
export const PortfolioContentComponent: React.FC<PortfolioContentComponentProps> = ({ content, size, editing }) => {
  const ContentComponent = PortfolioContentComponentSelector(content.type)
  return (
    <PortfolioContentWrapper content={content} editing={editing}>
      <ContentComponent content={content} size={size} />
    </PortfolioContentWrapper>
  )
}
