import * as React from 'react'
import { WithPortfolioContentProps } from './Portfolio/PortfolioContentBase'
import { getContentComponentsByType } from '../Provider/ProviderComponents'

export const PortfolioContentComponent: React.FC<WithPortfolioContentProps> = ({ content, size, editingObj, onChange }) => {
  const ContentComponent = getContentComponentsByType(content.type)
  return <ContentComponent content={content} size={size} editingObj={editingObj} onChange={onChange} />
}
