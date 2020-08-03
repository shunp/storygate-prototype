import * as React from 'react'

const ModalContainer = ({ children }) => {
  return <div className="relative left-0 bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">{children}</div>
}

export default ModalContainer
