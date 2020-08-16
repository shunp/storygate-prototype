import { Story } from './Story'
import { Portfolio } from './Portfolio'
import { CommunityReference } from './CommunityCaption'

export interface Content {
  portfolio: Portfolio
  story: Story
  readonly communities: CommunityReference[]
  openCommunities: string[]
}
