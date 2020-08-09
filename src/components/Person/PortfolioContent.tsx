import * as React from 'react'
import { YouTubeIFrame } from 'src/components/Provider/YouTube'
import { WithPortfolioContentProps } from './Portfolio/PortfolioContentBase'
import { TwitterIFrame } from '../Provider/Twitter'

const PortfolioContentComponentSelector = (type: string): React.FC<WithPortfolioContentProps<any>> => {
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
export const PortfolioContentComponent: React.FC<WithPortfolioContentProps> = ({ content, size, editing }) => {
  const ContentComponent = PortfolioContentComponentSelector(content.type)
  return <ContentComponent content={content} size={size} editing={editing} />
}
