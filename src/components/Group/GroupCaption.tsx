import * as React from 'react'
import { display } from 'src/utils/numeral'

interface GroupCaptionProps {
  name: string
  introduction: string
  num: number
}
const GroupCaption: React.FC<GroupCaptionProps> = ({ name, introduction, num }) => {
  return (
    <>
      <div className="font-bold text-2xl">{name}</div>
      <div className="text-gray-750 m-5">{introduction}</div>
      <div className="text-gray-500">{display(num)} 人参加</div>
    </>
  )
}

export default GroupCaption
