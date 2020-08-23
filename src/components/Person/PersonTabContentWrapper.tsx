import * as React from 'react'
import { ContentType } from 'src/services/interfaces/Content'

interface PersonTabContentWrapperProps {
  currentTab: ContentType
  contentType: ContentType
}
export const PersonTabContentWrapper: React.FC<PersonTabContentWrapperProps> = ({ children, currentTab, contentType }) => {
  return <div className={currentTab === contentType ? 'block' : 'hidden'}>{children}</div>
}
