import * as React from 'react'

interface GroupBackgroundProps {
  img: string
}
const GroupBackground: React.FC<GroupBackgroundProps> = ({ img }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <img src={img} alt="" />
    </div>
  )
}

export default GroupBackground
