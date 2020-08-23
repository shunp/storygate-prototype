import * as React from 'react'
import { SocialMediaCaption } from 'src/services/interfaces/Content'
import { buildSocialMediaCaption } from 'src/components/Provider/ContentsExtractor'
import { AddButton } from 'src/components/EditButton'
import { SocialMediaBadgePreview } from './SocialMediaBadge'

interface NewSocialMediaBadgeForm {
  profileImg?: string
  addSocialMediaCaption: (newSocialMediaCaption: SocialMediaCaption) => void
}
export const NewSocialMediaForm: React.FC<NewSocialMediaBadgeForm> = ({ profileImg, addSocialMediaCaption }) => {
  const [title, setTitle] = React.useState('')
  const [linkUrl, setLinkUrl] = React.useState('')
  const [imgUrl, setImgUrl] = React.useState('')
  const [useProfileImg, setUseProfileImg] = React.useState(true)
  const clearForm = () => {
    setTitle('')
    setLinkUrl('')
    setImgUrl('')
    setUseProfileImg(true)
  }
  return (
    <>
      <div className="text-gray-500">
        <div className="text-center text-lg font-bold">Link Your Social Media</div>
        <div className="text-center mt-2">Preview</div>
      </div>
      <SocialMediaBadgePreview title={title} linkUrl={linkUrl} imgUrl={imgUrl} useProfileImg={useProfileImg} profileImg={profileImg} />
      <div className="text-gray-500">
        <div className="text-center mt-2">URL</div>
        <input
          type="text"
          className="border-2 border-gray-500 focus:outline-none bg-white w-full h-10 px-5 rounded-lg"
          value={linkUrl}
          placeholder="Social Media URL..."
          onChange={e => setLinkUrl(e.target.value)}
        />
        <div className="text-center mt-2">Custom Title</div>
        <input
          type="text"
          className="border-2 border-gray-500 focus:outline-none bg-white w-full h-10 px-5 rounded-lg"
          value={title}
          placeholder="Social Media Custom Title..."
          onChange={e => setTitle(e.target.value)}
        />
        <div className="flex justify-evenly mt-2">
          <div>
            <input id="radio-use-profile-img" type="radio" checked={useProfileImg} onChange={e => setUseProfileImg(e.target.checked)} />
            <label htmlFor="radio-use-profile-img">Use Profile Img</label>
          </div>
          <div>
            <input id="radio-use-img-url" type="radio" checked={!useProfileImg} onChange={e => setUseProfileImg(!e.target.checked)} />
            <label htmlFor="radio-use-img-url">Use Image URL</label>
          </div>
        </div>
        <input
          type="text"
          className={`border-2 border-gray-500 focus:outline-none w-full h-10 px-5 rounded-lg bg-${useProfileImg ? 'gray-500' : 'white'}`}
          value={imgUrl}
          placeholder="Img URL..."
          onChange={e => setImgUrl(e.target.value)}
          disabled={useProfileImg}
        />
      </div>
      <div className="flex justify-center">
        <AddButton
          onClick={() => {
            try {
              addSocialMediaCaption(buildSocialMediaCaption(title, linkUrl, imgUrl, useProfileImg))
              clearForm()
            } catch (e) {
              // TODO
              console.error(e)
            }
          }}
        />
      </div>
    </>
  )
}
