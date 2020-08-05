import * as React from 'react'

const DoneButton = ({ onClick }) => {
  return (
    <button type="button" className="text-positive bg-transparent text-xs font-bold uppercase px-2 py-2 rounded" onClick={onClick}>
      Done
    </button>
  )
}

export default DoneButton
