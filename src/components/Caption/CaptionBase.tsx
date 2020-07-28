import * as React from 'react'
import CaptionWrapper from './CaptionWrapper'
import CaptionMain from './CaptionMain'
import CaptionName from './CaptionName'
import CaptionLocation from './CaptionLocation'
import CaptionTitle from './CaptionTitle'
import CaptionIntroduction from './CaptionIntroduction'

const CaptionBase = () => {
  return (
    <CaptionWrapper>
      <CaptionMain />
      <CaptionName />
      <CaptionLocation />
      <CaptionTitle />
      <CaptionIntroduction />
    </CaptionWrapper>
  )
}

export default CaptionBase
