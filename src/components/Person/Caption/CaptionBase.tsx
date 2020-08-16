import * as React from 'react'
import { Person } from 'src/services/interfaces/Person'
import { shallowEqualObjects } from 'shallow-equal'
import { EditCaptionName, EditCaptionLocation, EditCaptionProfileImg, EditCaptionIntroduction } from 'src/components/Person/Caption/edit'
import { Montserrat } from 'src/components/SGText'
import VerticalLine from 'src/components/VerticalLine'
import { LoginUser } from 'src/services/interfaces/Auth'
import CaptionWrapper from './CaptionWrapper'
import CaptionMain from './CaptionMain'
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
      <CaptionWrapper editing>
        <div className="flex items-center justify-center flex-col w-full">
          <EditCaptionProfileImg profileImg={original.img} setProfileImg={setNewImg} />
          <EditCaptionName name={name} setName={setName} />
          <EditCaptionLocation location={location} setLocation={setLocation} />
        </div>
      </CaptionWrapper>
      <EditCaptionIntroduction introduction={introduction} setIntroduction={setIntroduction} />
    </>
  )
}
interface CaptionBaseProps {
  loginUser: LoginUser
  data: Person
  editingCaption: boolean
  toggleEditingCaption: () => void
  updateCaption: (person: Person) => Promise<void>
}
const CaptionBase: React.FC<CaptionBaseProps> = ({ loginUser, data, editingCaption, toggleEditingCaption, updateCaption }) => {
  if (editingCaption) {
    return <CaptionEdit original={data} toggleEditingCaption={toggleEditingCaption} updateCaption={updateCaption} />
  }
  return (
    <>
      <CaptionWrapper profileImg={data.img}>
        <CaptionMain loginUser={loginUser} uid={data.ownerUid} profileImg={data.img} name={data.name} introduction={data.introduction} />
      </CaptionWrapper>
      <div className="border-white border-solid border mx-4 mb-4 opacity-50 lg:max-w-3xl lg:mx-auto" />
      <div className="flex justify-between mx-10">
        <div>
          <Montserrat className="text-white text-xl font-bold">{data.points}</Montserrat>
          <Montserrat className="text-white text-xs font-bold opacity-75">Points</Montserrat>
        </div>
        <VerticalLine />
        <div>
          <Montserrat className="text-white text-xl font-bold">{data.location || '-'}</Montserrat>
          <Montserrat className="text-white text-xs font-bold opacity-75">Living</Montserrat>
        </div>
        <VerticalLine />
        <div className="">
          <Montserrat className="text-white text-xl font-bold">{data.lastLoginFromNow}</Montserrat>
          <Montserrat className="text-white text-xs font-bold opacity-75">Login</Montserrat>
        </div>
      </div>
    </>
  )
}

export default CaptionBase
