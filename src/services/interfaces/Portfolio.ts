import { PostType } from 'src/components/Provider/providers'
import { LatLng } from './LatLng'

export interface Location {
  label: string
  latlng: LatLng
}
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
  location?: Location
}
export interface Portfolio {
  contents: PortfolioContent<WithIFrame | WithPicture>[]
}
