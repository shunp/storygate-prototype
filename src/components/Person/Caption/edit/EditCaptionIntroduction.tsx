import * as React from 'react'

interface EditCaptionIntroductionProps {
  introduction: string
  setIntroduction: React.Dispatch<React.SetStateAction<string>>
}
const EditCaptionIntroduction: React.FC<EditCaptionIntroductionProps> = ({ introduction, setIntroduction }) => {
  return (
    <div id="profile-introduction-edit" className="m-2">
      <div>紹介文</div>
      <textarea
        className="border-2 bordeer-gray-300 focus:outline-none bg-white h-20 w-full px-5 rounded-lg"
        value={introduction}
        placeholder="Introduction..."
        onChange={e => setIntroduction(e.target.value)}
      />
    </div>
  )
}

export default EditCaptionIntroduction
