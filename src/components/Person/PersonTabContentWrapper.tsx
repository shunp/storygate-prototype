import * as React from 'react'
import { ContentType } from 'src/services/interfaces/Content'

interface PersonTabContentWrapperProps {
  openTab: ContentType
  contentType: ContentType
}
export const PersonTabContentWrapper: React.FC<PersonTabContentWrapperProps> = ({ children, openTab, contentType }) => {
  return <div className={openTab === contentType ? 'block' : 'hidden'}>{children}</div>
}
