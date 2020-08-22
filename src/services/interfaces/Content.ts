import { ServiceType } from 'src/components/Provider/providers'
import { Story } from './Story'
import { Portfolio } from './Portfolio'
import { CommunityReference } from './CommunityCaption'

export interface SocialMediaCaption {
  serviceName: ServiceType
  serviceColor: string
  linkUrl: string
  imgUrl?: string
  useProfileImg?: boolean
}

export interface Content {
  socialMediaCaptions: SocialMediaCaption[]
  portfolio: Portfolio
  story: Story
  readonly communities: CommunityReference[]
  openCommunities: string[]
}
