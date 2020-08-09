import * as React from 'react'
import { Person } from 'src/services/interfaces/Person'
import { shallowEqualObjects } from 'shallow-equal'
import {
  EditCaptionName,
  EditCaptionTitle,
  EditCaptionLocation,
  EditCaptionProfileImg,
  EditCaptionIntroduction
} from 'src/components/Person/Caption/edit'
import CaptionWrapper from './CaptionWrapper'
import CaptionMain from './CaptionMain'
import CaptionName from './CaptionName'
import CaptionLocation from './CaptionLocation'
import CaptionTitle from './CaptionTitle'
import CaptionIntroduction from './CaptionIntroduction'
import { CompleteButtonSet, ClearButton, DoneButton } from '../../EditButton'

interface CaptionEditProps {
  original: Person
  toggleEditingCaption: () => void
  updateCaption: (person: Person, newImg?: Blob) => Promise<void>
}
const CaptionEdit: React.FC<CaptionEditProps> = ({ original, toggleEditingCaption, updateCaption }) => {
  const [name, setName] = React.useState(original.name)
  const [title, setTitle] = React.useState(original.title)
  const [location, setLocation] = React.useState(original.location)
  const [introduction, setIntroduction] = React.useState(original.introduction)
  const [newImg, setNewImg] = React.useState<Blob>()

  const doneEditing = async () => {
    if (!shallowEqualObjects(original, { name, title, introduction, location, newImg })) {
      await updateCaption({ pageId: original.pageId, name, title, introduction, location }, newImg)
    }
    toggleEditingCaption()
  }

  const resetEditing = () => {
    toggleEditingCaption()
  }
  return (
    <>
      <CompleteButtonSet
        ClearButton={<ClearButton onClick={resetEditing} />}
        DoneButton={<DoneButton onClick={doneEditing} />}
        className="mt-20"
      />
      <CaptionWrapper>
        <EditCaptionProfileImg profileImg={original.img} setProfileImg={setNewImg} />
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
  toggleEditingCaption: () => void
  updateCaption: (person: Person) => Promise<void>
}
const CaptionBase: React.FC<CaptionBaseProps> = ({ data, editingCaption, toggleEditingCaption, updateCaption }) => {
  if (editingCaption) {
    return <CaptionEdit original={data} toggleEditingCaption={toggleEditingCaption} updateCaption={updateCaption} />
  }
  return (
    <CaptionWrapper>
      <CaptionMain profileImg={data.img} />
      <CaptionName name={data.name} />
      <CaptionLocation location={data.location} />
      <CaptionTitle title={data.title} />
      <CaptionIntroduction introduction={data.introduction} />
    </CaptionWrapper>
  )
}

export default CaptionBase
