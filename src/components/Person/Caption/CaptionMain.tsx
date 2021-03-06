import * as React from 'react'
import CaptionProfileImg from './CaptionProfileImg'
import ItemBand from './ItemBand'
import CaptionName from './CaptionName'
import CaptionIntroduction from './CaptionIntroduction'

const CaptionMain = ({ loginUser, uid, profileImg, name, introduction }) => {
  return (
    <>
      <CaptionProfileImg profileImg={profileImg} />
      <div>
        <CaptionName name={name} />
        <CaptionIntroduction introduction={introduction} />
      </div>
      <ItemBand uid={uid} loginUser={loginUser} />
    </>
  )
}

export default CaptionMain
