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

const CaptionBase = ({ editingCaption, dispatch }) => {
  // TODO: DB
  const data = {
    name: '小池 駿平',
    title: 'Software Engineer',
    location: 'Hong Kong',
    pic:
      'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/1sLl53hRd7Z0LDksz9iB%2Fprofile.jpg?alt=media&token=2e5eda6a-07c8-4fd4-bbc1-1a5a30f455f4'
  }

  const [inputName, setInputName] = React.useState('')
  const [inputTitle, setInputTitle] = React.useState('')
  const [inputLocation, setInputLocation] = React.useState('')

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
        <div className="float-left mt-20 ml-2">
          <button
            type="button"
            className="text-negative bg-transparent text-xs font-bold uppercase px-2 py-2 rounded"
            onClick={resetEditing}
          >
            Clear
          </button>
        </div>
        <div className="float-right mt-20 mr-2">
          <button
            type="button"
            className="text-positive bg-transparent text-xs font-bold uppercase px-2 py-2 rounded"
            onClick={doneEditing}
          >
            Done
          </button>
        </div>
        <CaptionWrapper>
          <EditCaptionProfileImg profileImg={data.pic} />
          <EditCaptionName name={data.name} inputName={inputName} setInputName={setInputName} />
          <EditCaptionTitle title={data.title} inputTitle={inputTitle} setInputTitle={setInputTitle} />
          <EditCaptionLocation location={data.location} inputLocation={inputLocation} setInputLocation={setInputLocation} />
        </CaptionWrapper>
      </>
    )
  }
  return (
    <CaptionWrapper>
      <CaptionMain profileImg={data.pic} />
      <CaptionName name={data.name} />
      <CaptionLocation location={data.location} />
      <CaptionTitle title={data.title} />
      <CaptionIntroduction />
    </CaptionWrapper>
  )
}

export default CaptionBase
