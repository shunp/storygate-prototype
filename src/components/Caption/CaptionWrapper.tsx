import * as React from 'react'

const CaptionWrapper = ({ children }) => {
  return (
    <div id="caption" className="flex items-center justify-center flex-col flex-wrap p-4 pt-16">
      {children}
    </div>
  )
}

export default CaptionWrapper
