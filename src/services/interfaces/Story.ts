import { PortfolioCommonContent, WithIFrame, WithPicture } from './Portfolio'

export interface StoryCommonContent extends PortfolioCommonContent {
  time: string
}
export type StoryContent<T> = StoryCommonContent & T

export interface Story {
  contents: StoryContent<WithIFrame | WithPicture>[]
}
