import * as React from 'react'
import { PortfolioContent, WithIFrame, WithPicture } from 'src/services/interfaces/Portfolio'
import { BasicTitleLine } from 'src/components/TitleLine'
import { ContentExplanation } from 'src/components/ContentExplanation'

export interface PortfolioContentWrapperProps<T = {}> {
  content: PortfolioContent<T>
}
export const PortfolioContentWrapper: React.FC<PortfolioContentWrapperProps> = ({ children, content }) => {
  return (
    <>
      <BasicTitleLine title={content.title} />
      <div className="flex justify-center">{children}</div>
      <ContentExplanation text={content.text} />
    </>
  )
}
export type WithPortfolioContentProps<T> = T & {
  size: number
}
export interface PortfolioContentProps<T = {}> {
  content: T
  size: number
}
export const asPortfolioContentIFrame = (ContentComponent: React.FC<WithPortfolioContentProps<WithIFrame>>) => {
  return ({ content, size }: PortfolioContentProps<WithIFrame>) => <ContentComponent iframeKey={content.iframeKey} size={size} />
}
export const asPortfolioContentPicture = (ContentComponent: React.FC<WithPortfolioContentProps<WithPicture>>) => {
  return ({ content, size }: PortfolioContentProps<WithPicture>) => (
    <ContentComponent fullURL={content.fullURL} pic={content.pic} location={content.location} size={size} />
  )
}
