import * as React from 'react'
import { YouTubeIFrame } from 'src/components/Provider/YouTube'
import { WithPortfolioContentProps } from './Portfolio/PortfolioContentBase'
import { TwitterIFrame } from '../Provider/Twitter'
import { GeneralURLContent } from '../Provider/GeneralURL'

interface Dictionary {
  [key: string]: React.FC<WithPortfolioContentProps<any>>
}
const PortfolioContentComponentDictionary: Dictionary = {
  YouTubePost: YouTubeIFrame,
  TwitterPost: TwitterIFrame,
  GeneralURL: GeneralURLContent
}
export const PortfolioContentComponent: React.FC<WithPortfolioContentProps> = ({ content, size, editing }) => {
  const ContentComponent = PortfolioContentComponentDictionary[content.type]
  return <ContentComponent content={content} size={size} editing={editing} />
}
