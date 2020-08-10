import * as React from 'react'
import { getPortfolioContentComponentsByType } from 'src/components/Provider/ProviderComponents'
import { WithPortfolioContentProps } from './PortfolioContentBase'

export const PortfolioContentComponent: React.FC<WithPortfolioContentProps> = ({ content, size, editingObj, onChange }) => {
  const ContentComponent = getPortfolioContentComponentsByType(content.type)
  return <ContentComponent content={content} size={size} editingObj={editingObj} onChange={onChange} />
}
