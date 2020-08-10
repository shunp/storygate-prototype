import { YouTubeIFrame } from 'src/components/Provider/YouTube'
import { WithPortfolioContentProps } from 'src/components/Person/Portfolio/PortfolioContentBase'
import { WithIFrame, WithPicture } from 'src/services/interfaces/Portfolio'
import { InstagramIFrame } from './Instagram'
import { GeneralURLContent } from './GeneralURL'
import { FacebookIFrame } from './Facebook'
import { TwitterIFrame } from './Twitter'
import { PostType } from './providers'

type ContentComponentsDictionary = {
  [key in PostType]: React.FC<WithPortfolioContentProps<WithIFrame>> | React.FC<WithPortfolioContentProps<WithPicture>>
}
const ContentComponents: ContentComponentsDictionary = {
  YouTubePost: YouTubeIFrame,
  TwitterPost: TwitterIFrame,
  FacebookPost: FacebookIFrame,
  InstagramPost: InstagramIFrame,
  GeneralURL: GeneralURLContent
}

export const getContentComponentsByType = (type: PostType): React.FC<WithPortfolioContentProps<any>> => ContentComponents[type]
