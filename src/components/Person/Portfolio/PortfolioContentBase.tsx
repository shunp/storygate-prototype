import * as React from 'react'
import { PortfolioContent, WithIFrame, WithPicture } from 'src/services/interfaces/Portfolio'
import { PortfolioTitle, ModifiableTitleLine } from 'src/components/TitleLine'
import { ContentExplanation, ModifiableContentExplanation } from 'src/components/ContentExplanation'
import { ModifiableContentLocation, ContentLocation } from 'src/components/ContentLocation'

const ContentMain = ({ children }) => {
  return <div className="flex justify-center overflow-hidden mt-32">{children}</div>
}
export interface PortfolioContentWrapperProps<T = {}> {
  content: PortfolioContent<T>
  editingObj?: PortfolioContent<T> | {}
  onChange?: (key: string, value: string) => void
}
export const PortfolioContentWrapper: React.FC<PortfolioContentWrapperProps> = ({ children, content, editingObj, onChange }) => {
  if (editingObj) {
    return (
      <>
        <ModifiableTitleLine title={editingObj.title} onChange={onChange} />
        <ContentMain>{children}</ContentMain>
        <ModifiableContentExplanation text={editingObj.text} onChange={onChange} />
      </>
    )
  }
  return (
    <>
      <PortfolioTitle title={content.title} />
      <ContentMain>{children}</ContentMain>
      <ContentExplanation text={content.text} />
    </>
  )
}
export const PortfolioContentWrapperWithPicture: React.FC<PortfolioContentWrapperProps<WithPicture>> = ({
  children,
  content,
  editingObj,
  onChange
}) => {
  if (editingObj) {
    return (
      <>
        <ModifiableTitleLine title={editingObj.title} onChange={onChange} />
        <ContentMain>{children}</ContentMain>
        <ModifiableContentExplanation text={editingObj.text} onChange={onChange} />
        <ModifiableContentLocation location={editingObj.location} onChange={onChange} />
      </>
    )
  }
  return (
    <>
      <PortfolioTitle title={content.title} />
      <ContentMain>{children}</ContentMain>
      <ContentExplanation text={content.text} />
      <ContentLocation location={content.location} />
    </>
  )
}
export type WithPortfolioContentProps<T = {}> = PortfolioContentWrapperProps<T> & PortfolioContentProps<T>
export type PortfolioContentProps<T = {}> = T & {
  size?: number
}
export const asPortfolioContentIFrame = (ContentComponent: React.FC<PortfolioContentProps<WithIFrame>>) => {
  return ({ content, size, editingObj, onChange }: WithPortfolioContentProps<WithIFrame>) => (
    <PortfolioContentWrapper content={content} editingObj={editingObj} onChange={onChange}>
      <ContentComponent iframeKey={content.iframeKey} size={size} />
    </PortfolioContentWrapper>
  )
}
export const asPortfolioContentPicture = (ContentComponent: React.FC<PortfolioContentProps<WithPicture>>) => {
  return ({ content, editingObj, onChange }: WithPortfolioContentProps<WithPicture>) => (
    <PortfolioContentWrapperWithPicture content={content} editingObj={editingObj} onChange={onChange}>
      <ContentComponent fullURL={content.fullURL} pic={content.pic} />
    </PortfolioContentWrapperWithPicture>
  )
}
