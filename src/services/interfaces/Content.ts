import { ServiceType } from 'src/components/Provider/providers'
import { Story } from './Story'
import { Portfolio } from './Portfolio'
import { CommunityReference } from './CommunityCaption'

export interface SocialMediaCaption {
  id: string
  serviceName: ServiceType
  linkUrl: string
  title?: string
  serviceColor?: string
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

const CONTENT_TYPES = ['Portfolio', 'Story', 'Community'] as const
export type ContentType = typeof CONTENT_TYPES[number]
