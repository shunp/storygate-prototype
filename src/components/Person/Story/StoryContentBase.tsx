import * as React from 'react'
import { WithIFrame, WithPicture } from 'src/services/interfaces/Portfolio'
import { PortfolioExplanation, StoryExplanation, ModifiablePortfolioExplanation } from 'src/components/ContentExplanation'
import { StoryContent } from 'src/services/interfaces/Story'
import { BallonTitleLine, ModifiableBallonTitleLine } from 'src/components/TitleLine'
import { ContentLocation, ModifiableContentLocation } from 'src/components/ContentLocation'

export interface StoryContentWrapperProps<T = {}> {
  content: StoryContent<T>
  editingObj?: StoryContent<T> | {}
  onChange?: (key: string, value: string) => void
}
export const StoryContentWrapper: React.FC<StoryContentWrapperProps> = ({ children, content, editingObj, onChange }) => {
  if (editingObj) {
    return (
      <>
        <ModifiableBallonTitleLine title={editingObj.title} time={editingObj.time} onChange={onChange} />
        <div className="flex justify-center">{children}</div>
        <ModifiablePortfolioExplanation text={editingObj.text} onChange={onChange} />
      </>
    )
  }
  return (
    <>
      <div className="flex justify-center">{children}</div>
      <StoryExplanation title={content.title} text={content.text} />
    </>
  )
}
export const StoryContentWrapperWithPicture: React.FC<StoryContentWrapperProps<WithPicture>> = ({
  children,
  content,
  editingObj,
  onChange
}) => {
  if (editingObj) {
    return (
      <>
        <ModifiableBallonTitleLine title={editingObj.title} time={editingObj.time} onChange={onChange} />
        <div className="flex justify-center">{children}</div>
        <ModifiablePortfolioExplanation text={editingObj.text} onChange={onChange} />
        <ModifiableContentLocation location={editingObj.location} onChange={onChange} />
      </>
    )
  }
  return (
    <>
      <BallonTitleLine title={content.title} time={content.time} />
      <div className="flex justify-center">{children}</div>
      <PortfolioExplanation text={content.text} />
      <ContentLocation location={content.location} />
    </>
  )
}
export type WithStoryContentProps<T = {}> = StoryContentWrapperProps<T> & StoryContentProps<T>
export type StoryContentProps<T = {}> = T & {
  size?: number
}
export const asStoryContentIFrame = (ContentComponent: React.FC<StoryContentProps<WithIFrame>>) => {
  return ({ content, size, editingObj, onChange }: WithStoryContentProps<WithIFrame>) => (
    <StoryContentWrapper content={content} editingObj={editingObj} onChange={onChange}>
      <ContentComponent iframeKey={content.iframeKey} size={size} />
    </StoryContentWrapper>
  )
}

export const asStoryContentPicture = (ContentComponent: React.FC<StoryContentProps<WithPicture>>) => {
  return ({ content, editingObj, onChange }: WithStoryContentProps<WithPicture>) => (
    <StoryContentWrapperWithPicture content={content} editingObj={editingObj} onChange={onChange}>
      <ContentComponent fullURL={content.fullURL} pic={content.pic} />
    </StoryContentWrapperWithPicture>
  )
}
