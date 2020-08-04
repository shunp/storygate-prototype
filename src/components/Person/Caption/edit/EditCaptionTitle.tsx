import * as React from 'react'

interface EditCaptionTitleProps {
  title: string
  inputTitle: string
  setInputTitle: any
}
const EditCaptionTitle: React.FC<EditCaptionTitleProps> = ({ title, inputTitle, setInputTitle }) => {
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
