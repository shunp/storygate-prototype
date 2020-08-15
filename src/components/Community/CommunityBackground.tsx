import * as React from 'react'

interface CommunityBackgroundProps {
  img: string
}
const CommunityBackground: React.FC<CommunityBackgroundProps> = ({ img }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <img src={img} alt="" />
    </div>
  )
}

export default CommunityBackground
