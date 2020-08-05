import * as React from 'react'

interface CompleteButtonProps {
  ClearButton: any
  DoneButton: any
  className?: string
}

interface EditingButtonProps {
  DeleteButton: any
  EditingButton: any
  className?: string
}

export const CompleteButtonSet: React.FC<CompleteButtonProps> = ({ ClearButton, DoneButton, className }) => {
  return (
    <>
      <div className={`float-left ml-2 ${className}`}>{ClearButton}</div>
      <div className={`float-right mr-2 ${className}`}>{DoneButton}</div>
    </>
  )
}

export const EditingButtonSet: React.FC<EditingButtonProps> = ({ DeleteButton, EditingButton, className }) => {
  return (
    <>
      <div className={`float-left ml-2 ${className}`}>{DeleteButton}</div>
      <div className={`float-right mr-2 ${className}`}>{EditingButton}</div>
    </>
  )
}

export const DoneButton = ({ onClick }) => {
  return (
    <button type="button" className="text-positive bg-transparent text-xs font-bold uppercase px-2 py-2 rounded" onClick={onClick}>
      Done
    </button>
  )
}

export const DeleteButton = ({ onClick }) => {
  return (
    <button type="button" className="text-negative bg-transparent text-xs font-bold uppercase px-2 py-2 rounded" onClick={onClick}>
      Delete
    </button>
  )
}

export const ClearButton = ({ onClick }) => {
  return (
    <button type="button" className="text-negative bg-transparent text-xs font-bold uppercase px-2 py-2 rounded" onClick={onClick}>
      Clear
    </button>
  )
}

export const EditingButton = ({ onClick }) => {
  return (
    <button type="button" className="text-positive bg-transparent text-xs font-bold uppercase px-2 py-2 rounded" onClick={onClick}>
      Edit
    </button>
  )
}
