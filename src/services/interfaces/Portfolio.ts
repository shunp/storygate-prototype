import { PostType } from 'src/components/Provider/providers'

export interface PortfolioCommonContent {
  id: string
  type: PostType
  title: string
  text: string
}
export type PortfolioContent<T> = PortfolioCommonContent & T
export interface WithIFrame {
  iframeKey: string
}
export interface WithPicture {
  fullURL: string
  pic: string
  location?: string
}
export interface Portfolio {
  contents: PortfolioContent<WithIFrame | WithPicture>[]
}
