import * as React from 'react'

export const ContentExplanation = ({ text }) => {
  return <div className="text-gray-500 p-4">{text}</div>
}

export const ModifiableContentExplanation = ({ text, onChange }) => {
  return (
    <div className="text-gray-500">
      <div className="m-1 text-xs text-white">説明</div>
      <textarea
        className="border-2 bordeer-gray-300 focus:outline-none bg-white h-20 w-full px-2 rounded-lg"
        value={text}
        placeholder="explanation..."
        onChange={e => onChange('text', e.target.value)}
      />
    </div>
  )
}
