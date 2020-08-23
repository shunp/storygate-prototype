import * as React from 'react'

interface ModalContainerProps {
  className?: string
}
const ModalContainer: React.FC<ModalContainerProps> = ({ children, className }) => {
  return (
    <div className={`relative left-0 bg-gray-800 w-full md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto ${className || ''}`}>
      {children}
    </div>
  )
}

export default ModalContainer
