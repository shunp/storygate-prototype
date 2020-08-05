import * as React from 'react'
import { AnyAction } from 'redux'
import { toggleEditCaption } from 'src/state/app'
import { Person } from 'src/services/interfaces/Person'
import { PersonService } from 'src/services/PersonService'
import { shallowEqualObjects } from 'shallow-equal'
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
import { CompleteButtonSet, ClearButton, DoneButton } from '../../EditButton'

interface CaptionEditProps {
  original: Person
  dispatch: React.Dispatch<React.SetStateAction<AnyAction>>
}
const CaptionEdit: React.FC<CaptionEditProps> = ({ original, dispatch }) => {
  const [name, setName] = React.useState(original.name)
  const [title, setTitle] = React.useState(original.title)
  const [location, setLocation] = React.useState(original.location)
  const [introduction, setIntroduction] = React.useState(original.introduction)
  const [pic, setPic] = React.useState(original.pic)

  const doneEditing = async () => {
    if (!shallowEqualObjects(original, { name, title, introduction, location, pic })) {
      await PersonService.updateCaption({ pageId: original.pageId, name, title, introduction, location, pic })
      // TODO hook
      // window.location.reload()
    }
    dispatch(toggleEditCaption())
  }

  const resetEditing = () => {
    dispatch(toggleEditCaption())
  }
  return (
    <>
      <CompleteButtonSet
        ClearButton={<ClearButton onClick={resetEditing} />}
        DoneButton={<DoneButton onClick={doneEditing} />}
        className="mt-20"
      />
      <CaptionWrapper>
        <EditCaptionProfileImg profileImg={pic} setProfileImg={setPic} />
        <EditCaptionName name={name} setName={setName} />
        <EditCaptionTitle title={title} setTitle={setTitle} />
        <EditCaptionLocation location={location} setLocation={setLocation} />
      </CaptionWrapper>
      <EditCaptionIntroduction introduction={introduction} setIntroduction={setIntroduction} />
    </>
  )
}
interface CaptionBaseProps {
  data: Person
  editingCaption: boolean
  dispatch: React.Dispatch<React.SetStateAction<AnyAction>>
}
const CaptionBase: React.FC<CaptionBaseProps> = ({ data, editingCaption, dispatch }) => {
  if (editingCaption) {
    return <CaptionEdit original={data} dispatch={dispatch} />
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
