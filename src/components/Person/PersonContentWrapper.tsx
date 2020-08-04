import * as React from 'react'

const PersonContentWrapper = ({ children }) => {
  return (
    <div id="main-content" className="relative flex flex-col w-full">
      <div className="mt-4 flex-auto">
        <div className="tab-content tab-space">{children}</div>
      </div>
    </div>
  )
}

export default PersonContentWrapper
