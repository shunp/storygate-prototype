import * as React from 'react'
import { Montserrat } from 'src/components/SGText'

export interface CaptionIntroductionProps {
  introduction: string
}
const CaptionIntroduction: React.FC<CaptionIntroductionProps> = ({ introduction }) => {
  return (
    <div id="profile-introduction" className="mx-2">
      <Montserrat className="text-white opacity-75 font-bold text-xs">{introduction}</Montserrat>
    </div>
  )
}

export default CaptionIntroduction
