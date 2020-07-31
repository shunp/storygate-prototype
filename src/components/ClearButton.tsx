import * as React from 'react'

const ClearButton = ({ onClick }) => {
  return (
    <button type="button" className="text-negative bg-transparent text-xs font-bold uppercase px-2 py-2 rounded" onClick={onClick}>
      Clear
    </button>
  )
}

export default ClearButton
