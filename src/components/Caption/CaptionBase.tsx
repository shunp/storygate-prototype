import * as React from 'react'
import CaptionWrapper from './CaptionWrapper'
import CaptionMain from './CaptionMain'
import CaptionName from './CaptionName'
import CaptionLocation from './CaptionLocation'
import CaptionTitle from './CaptionTitle'
import CaptionIntroduction from './CaptionIntroduction'
import EditCaptionName from './edit/EditCaptionName'
import EditCaptionTitle from './edit/EditCaptionTitle'

const CaptionBase = () => {
  // TODO: DB
  const data = { name: '小池 駿平', title: 'Software Engineer' }
  // TODO: state
  const [editting, setEditting] = React.useState(true)
  const [inputName, setInputName] = React.useState('')
  const [inputTitle, setInputTitle] = React.useState('')

  const doneEditting = () => {
    // save inputName
    setEditting(false)
  }

  const resetEditting = () => {
    setEditting(false)
  }

  if (editting) {
    return (
      <>
        <div className="float-left mt-20 ml-2">
          <button
            type="button"
            className="text-negative bg-transparent text-xs font-bold uppercase px-2 py-2 rounded"
            onClick={resetEditting}
          >
            Clear
          </button>
        </div>
        <div className="float-right mt-20 mr-2">
          <button
            type="button"
            className="text-positive bg-transparent text-xs font-bold uppercase px-2 py-2 rounded"
            onClick={doneEditting}
          >
            Done
          </button>
        </div>
        <CaptionWrapper>
          <EditCaptionName name={data.name} inputName={inputName} setInputName={setInputName} />
          <EditCaptionTitle title={data.title} inputTitle={inputTitle} setInputTitle={setInputTitle} />
        </CaptionWrapper>
      </>
    )
  }
  return (
    <CaptionWrapper>
      <CaptionMain />
      <CaptionName name={data.name} />
      <CaptionLocation />
      <CaptionTitle title={data.title} />
      <CaptionIntroduction />
    </CaptionWrapper>
  )
}

export default CaptionBase
