import * as React from 'react'
import { toggleEditCaption } from 'src/state/app'
import CaptionWrapper from './CaptionWrapper'
import CaptionMain from './CaptionMain'
import CaptionName from './CaptionName'
import CaptionLocation from './CaptionLocation'
import CaptionTitle from './CaptionTitle'
import CaptionIntroduction from './CaptionIntroduction'
import EditCaptionName from './edit/EditCaptionName'
import EditCaptionTitle from './edit/EditCaptionTitle'
import EditCaptionLocation from './edit/EditCaptionLocation'
import EditCaptionProfileImg from './edit/EditCaptionProfileImg'
import EditCaptionIntroduction from './edit/EditCaptionIntroduction'
import DoneButton from '../DoneButton'
import ClearButton from '../ClearButton'
import EditButton from '../EditButton'

const CaptionBase = ({ editingCaption, dispatch }) => {
  // TODO: DB
  const data = {
    name: '小池 駿平',
    title: 'Software Engineer',
    location: 'Hong Kong',
    pic:
      'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/1sLl53hRd7Z0LDksz9iB%2Fprofile.jpg?alt=media&token=2e5eda6a-07c8-4fd4-bbc1-1a5a30f455f4',
    introduction:
      'BlockchainやWebGLなど / AWS Best Architecture 2018 / 書籍「Solidityプログラミング」発売中 / 秋から香港で仮想世界構築の研究'
  }

  const [inputName, setInputName] = React.useState('')
  const [inputTitle, setInputTitle] = React.useState('')
  const [inputLocation, setInputLocation] = React.useState('')
  const [inputIntroduction, setInputIntroduction] = React.useState('')

  const doneEditing = () => {
    // TODO: firebase
    dispatch(toggleEditCaption())
  }

  const resetEditing = () => {
    dispatch(toggleEditCaption())
  }

  if (editingCaption) {
    return (
      <>
        <EditButton ClearButton={<ClearButton onClick={resetEditing} />} DoneButton={<DoneButton onClick={doneEditing} />} />Ï
        <CaptionWrapper>
          <EditCaptionProfileImg profileImg={data.pic} />
          <EditCaptionName name={data.name} inputName={inputName} setInputName={setInputName} />
          <EditCaptionTitle title={data.title} inputTitle={inputTitle} setInputTitle={setInputTitle} />
          <EditCaptionLocation location={data.location} inputLocation={inputLocation} setInputLocation={setInputLocation} />
        </CaptionWrapper>
        <EditCaptionIntroduction
          introduction={data.introduction}
          inputIntroduction={inputIntroduction}
          setInputIntroduction={setInputIntroduction}
        />
      </>
    )
  }
  return (
    <CaptionWrapper>
      <CaptionMain profileImg={data.pic} />
      <CaptionName name={data.name} />
      <CaptionLocation location={data.location} />
      <CaptionTitle title={data.title} />
      <CaptionIntroduction introduction={data.introduction} />
    </CaptionWrapper>
  )
}

export default CaptionBase
