import * as React from 'react'
import { css } from '@emotion/core'
import { CaptionNameProps } from '../CaptionName'

const EditCapionName: React.FC<CaptionNameProps> = ({ name }) => {
  const [inputName, setInputName] = React.useState('')
  React.useEffect(() => {
    setInputName(name)
  }, [name])
  return (
    <div id="profile-name-edit" className="mt-2">
      <div>お名前</div>
      <input
        type="text"
        className="border-2 bordeer-gray-300 focus:outline-none bg-white h-10 px-5 rounded-lg"
        value={inputName}
        placeholder="Name..."
        onChange={e => setInputName(e.target.value)}
      />
    </div>
  )
}

export default EditCapionName
