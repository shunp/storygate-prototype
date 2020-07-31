import * as React from 'react'

interface EditButtonProps {
  ClearButton: React.FC
  DoneButton: React.FC
}
const EditButton: React.FC<EditButtonProps> = ({ ClearButton, DoneButton }) => {
  return (
    <>
      <div className="float-left mt-20 ml-2">{ClearButton}</div>
      <div className="float-right mt-20 mr-2">{DoneButton}</div>
    </>
  )
}
export default EditButton
