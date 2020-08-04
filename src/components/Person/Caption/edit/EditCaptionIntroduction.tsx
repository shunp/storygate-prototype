import * as React from 'react'

interface EditCaptionIntroductionProps {
  introduction: string
  inputIntroduction: string
  setInputIntroduction: any
}
const EditCaptionIntroduction: React.FC<EditCaptionIntroductionProps> = ({ introduction, inputIntroduction, setInputIntroduction }) => {
  React.useEffect(() => {
    setInputIntroduction(introduction)
  }, [introduction])
  return (
    <div id="profile-introduction-edit" className="m-2">
      <div>紹介文</div>
      <textarea
        className="border-2 bordeer-gray-300 focus:outline-none bg-white h-20 w-full px-5 rounded-lg"
        value={inputIntroduction}
        placeholder="Introduction..."
        onChange={e => setInputIntroduction(e.target.value)}
      />
    </div>
  )
}

export default EditCaptionIntroduction
