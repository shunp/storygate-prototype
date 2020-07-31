import * as React from 'react'
import CaptionProfileImg from './CaptionProfileImg'
import ItemBand from './ItemBand'

const CaptionMain = ({ profileImg }) => {
  return (
    <div id="profile-image" className="flex items-center justify-between flex-wrap w-1/2">
      <CaptionProfileImg profileImg={profileImg} />
      <ItemBand />
    </div>
  )
}

export default CaptionMain
