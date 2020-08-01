import * as React from 'react'
import { display } from 'src/utils/numeral'

interface CommunityCaptionProps {
  name: string
  num: number
}
const CommunityCaption: React.FC<CommunityCaptionProps> = ({ name, num }) => {
  return (
    <>
      <div className="font-bold text-2xl">{name}</div>
      <div className="text-gray-500">{display(num)} 人参加</div>
    </>
  )
}

export default CommunityCaption
