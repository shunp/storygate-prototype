import * as React from 'react'
import { CaptionTitleProps } from '../CaptionTitle'

const EditCaptionTitle: React.FC<CaptionTitleProps> = ({ title }) => {
  const [inputTitle, setInputTitle] = React.useState('')
  React.useEffect(() => {
    setInputTitle(title)
  }, [title])
  return (
    <div id="profile-title-edit" className="mt-2">
      <div>職業/生業</div>
      <input
        type="text"
        className="border-2 bordeer-gray-300 focus:outline-none bg-white h-10 px-5 rounded-lg"
        value={inputTitle}
        placeholder="Title..."
        onChange={e => setInputTitle(e.target.value)}
      />
    </div>
  )
}

export default EditCaptionTitle
