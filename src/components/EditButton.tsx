import * as React from 'react'

interface EditButtonProps {
  ClearButton: any
  DoneButton: any
  className?: string
}
const EditButton: React.FC<EditButtonProps> = ({ ClearButton, DoneButton, className }) => {
  return (
    <>
      <div className={`float-left ml-2 ${className}`}>{ClearButton}</div>
      <div className={`float-right mr-2 ${className}`}>{DoneButton}</div>
    </>
  )
}
export default EditButton
