import * as React from 'react'
import { getStoryContentComponentsByType } from 'src/components/Provider/ProviderComponents'
import { WithStoryContentProps } from './StoryContentBase'

export const StoryContentComponent: React.FC<WithStoryContentProps> = ({ content, size, editingObj, onChange }) => {
  const ContentComponent = getStoryContentComponentsByType(content.type)
  return <ContentComponent content={content} size={size} editingObj={editingObj} onChange={onChange} />
}
