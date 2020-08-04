import * as React from 'react'
import { AnyAction } from 'redux'
import { toggleEditCaption } from 'src/state/app'
import { Person } from 'src/services/interfaces/Person'
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

interface CaptionBaseProps {
  data: Person
  editingCaption: boolean
  dispatch: React.Dispatch<React.SetStateAction<AnyAction>>
}
const CaptionBase: React.FC<CaptionBaseProps> = ({ data, editingCaption, dispatch }) => {
  const [inputName, setInputName] = React.useState('')
  const [inputTitle, setInputTitle] = React.useState('')
  const [inputLocation, setInputLocation] = React.useState('')
  const [inputIntroduction, setInputIntroduction] = React.useState('')
  const [profileImg, setProfileImg] = React.useState('')

  const doneEditing = () => {
    // TODO: firebase
    // save inputName, inputTitle, inputLocation, inputIntroduction, profileImg
    // if the value has changed
    dispatch(toggleEditCaption())
  }

  const resetEditing = () => {
    dispatch(toggleEditCaption())
  }

  if (editingCaption) {
    return (
      <>
        <EditButton
          ClearButton={<ClearButton onClick={resetEditing} />}
          DoneButton={<DoneButton onClick={doneEditing} />}
          className="mt-20"
        />
        <CaptionWrapper>
          <EditCaptionProfileImg profileImg={data.pic} setProfileImg={setProfileImg} />
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
