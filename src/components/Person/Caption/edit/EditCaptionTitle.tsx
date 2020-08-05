import * as React from 'react'

interface EditCaptionTitleProps {
  title: string
  setTitle: React.Dispatch<React.SetStateAction<string>>
}
const EditCaptionTitle: React.FC<EditCaptionTitleProps> = ({ title, setTitle }) => {
  return (
    <div id="profile-title-edit" className="mt-2">
      <div>職業/生業</div>
      <input
        type="text"
        className="border-2 bordeer-gray-300 focus:outline-none bg-white h-10 px-5 rounded-lg"
        value={title}
        placeholder="Title..."
        onChange={e => setTitle(e.target.value)}
      />
    </div>
  )
}

export default EditCaptionTitle
