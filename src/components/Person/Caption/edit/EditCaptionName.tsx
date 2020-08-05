import * as React from 'react'

interface EditCaptionNameProps {
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
}

const EditCaptionName: React.FC<EditCaptionNameProps> = ({ name, setName }) => {
  return (
    <div id="profile-name-edit" className="mt-2">
      <div>お名前</div>
      <input
        type="text"
        className="border-2 bordeer-gray-300 focus:outline-none bg-white h-10 px-5 rounded-lg"
        value={name}
        placeholder="Name..."
        onChange={e => setName(e.target.value)}
      />
    </div>
  )
}

export default EditCaptionName
