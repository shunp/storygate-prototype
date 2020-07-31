import * as React from 'react'

interface EditCaptionLocationProps {
  location: string
  inputLocation: string
  setInputLocation: any
}

const EditCaptionLocation: React.FC<EditCaptionLocationProps> = ({ location, inputLocation, setInputLocation }) => {
  React.useEffect(() => {
    setInputLocation(location)
  }, [location])
  return (
    <div id="profile-location" className="m-1">
      <div>場所</div>
      <input
        type="text"
        className="border-2 bordeer-gray-300 focus:outline-none bg-white h-10 px-5 rounded-lg"
        value={inputLocation}
        placeholder="Location..."
        onChange={e => setInputLocation(e.target.value)}
      />
    </div>
  )
}

export default EditCaptionLocation
