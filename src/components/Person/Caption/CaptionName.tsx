import * as React from 'react'
import { Noto } from 'src/components/SGText'

export interface CaptionNameProps {
  name: string
}
const CaptionName: React.FC<CaptionNameProps> = ({ name }) => {
  return (
    <div id="profile-name" className="mx-2 mt-1">
      <Noto className="text-xl text-white">{name}</Noto>
    </div>
  )
}

export default CaptionName
