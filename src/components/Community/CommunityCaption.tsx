import * as React from 'react'

const CommunityCaption = ({ title, number }) => {
  return (
    <>
      <div className="font-bold text-2xl">{title}</div>
      <div className="text-gray-500">{number} 人参加</div>
    </>
  )
}

export default CommunityCaption
