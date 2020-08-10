import {
  asPortfolioContentPicture,
  WithPortfolioContentProps,
  asPortfolioContentIFrame
} from 'src/components/Person/Portfolio/PortfolioContentBase'
import { WithStoryContentProps, asStoryContentIFrame, asStoryContentPicture } from 'src/components/Person/Story/StoryContentBase'
import { WithIFrame, WithPicture } from 'src/services/interfaces/Portfolio'
import { PostType } from './providers'
import { YouTubeIFrame } from './YouTube'
import { TwitterIFrame } from './Twitter'
import { FacebookIFrame } from './Facebook'
import { InstagramIframe } from './Instagram'
import { GeneralURLContent } from './GeneralURL'
import { TextIFrame } from './FreeText'

type PortfolioContentComponents = {
  [key in PostType]: React.FC<WithPortfolioContentProps<WithIFrame>> | React.FC<WithPortfolioContentProps<WithPicture>>
}
const PortfolioContentComponents: PortfolioContentComponents = {
  YouTubePost: asPortfolioContentIFrame(YouTubeIFrame),
  TwitterPost: asPortfolioContentIFrame(TwitterIFrame),
  FacebookPost: asPortfolioContentIFrame(FacebookIFrame),
  InstagramPost: asPortfolioContentIFrame(InstagramIframe),
  GeneralURL: asPortfolioContentPicture(GeneralURLContent),
  Text: asPortfolioContentIFrame(TextIFrame)
}

export const getPortfolioContentComponentsByType = (type: PostType): React.FC<WithPortfolioContentProps<any>> =>
  PortfolioContentComponents[type]
