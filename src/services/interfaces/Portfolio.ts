export interface PortfolioCommonContent {
  id: string
  type: string
  title: string
  text: string
}
export type PortfolioContent<T> = PortfolioCommonContent & T
export interface WithIFrame {
  iframeKey: string
  size: number
}
export interface WithPicture {
  fullURL: string
  pic: string
  location?: string
}
export interface Portfolio {
  contents: PortfolioContent<WithIFrame | WithPicture>[]
}

export const isWithIFrame = (portfolioContent: any): portfolioContent is PortfolioContent<WithIFrame> => {
  return portfolioContent.type === 'YouTubePost'
}
export const isWithPicture = (portfolioContent: any): portfolioContent is PortfolioContent<WithPicture> => {
  return portfolioContent.type === 'GeneralURL'
}
