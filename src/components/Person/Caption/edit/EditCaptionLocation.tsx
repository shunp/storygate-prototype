import * as React from 'react'

interface EditCaptionLocationProps {
  location: string
  setLocation: React.Dispatch<React.SetStateAction<string>>
}

const EditCaptionLocation: React.FC<EditCaptionLocationProps> = ({ location, setLocation }) => {
  return (
    <div id="profile-location" className="m-1">
      <div>場所</div>
      <input
        type="text"
        className="border-2 bordeer-gray-300 focus:outline-none bg-white h-10 px-5 rounded-lg"
        value={location}
        placeholder="Location..."
        onChange={e => setLocation(e.target.value)}
      />
    </div>
  )
}

export default EditCaptionLocation
