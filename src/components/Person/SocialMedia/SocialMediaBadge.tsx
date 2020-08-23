import * as React from 'react'
import { SocialMediaCaption } from 'src/services/interfaces/Content'
import { Montserrat } from 'src/components/SGText'
import { judgeServiceOrUndefined } from 'src/components/Provider/ContentsExtractor'
import { getServiceColor } from 'src/components/Provider/providers'
import { Person } from 'src/services/interfaces/Person'
import CaptionProfileImg from '../Caption/CaptionProfileImg'

interface SocialMediaBadgeBaseProps {
  title: string
  linkUrl: string
  color?: string
  imgUrl?: string
}
const SocialMediaBadgeBase: React.FC<SocialMediaBadgeBaseProps> = ({ title, color, imgUrl, linkUrl }) => {
  return (
    <a href={linkUrl} target="_blank" rel="noreferrer" className="w-1/2">
      <div className={`flex flex-row items-center bg-${color} rounded-full py-1 px-1 mt-2 mx-2`}>
        <CaptionProfileImg profileImg={imgUrl} className="rounded-full w-8 mr-2" />
        <Montserrat className="text-white text-md font-bold">{title}</Montserrat>
      </div>
    </a>
  )
}
interface SocialMediaBadgeProps {
  socialMediaCaption: SocialMediaCaption
  profileImg?: string
}
export const SocialMediaBadge: React.FC<SocialMediaBadgeProps> = ({ socialMediaCaption, profileImg }) => {
  const { serviceName, title, serviceColor, imgUrl, linkUrl, useProfileImg } = socialMediaCaption
  return (
    <SocialMediaBadgeBase
      title={title || serviceName}
      linkUrl={linkUrl}
      color={serviceColor || getServiceColor(serviceName)}
      imgUrl={useProfileImg ? profileImg : imgUrl}
    />
  )
}

interface SocialMediaBadgesProps {
  socialMediaCaptions: SocialMediaCaption[]
  personCaption: Person
}
export const SocialMediaBadges: React.FC<SocialMediaBadgesProps> = ({ socialMediaCaptions, personCaption }) => {
  const list = socialMediaCaptions.map(caption => <SocialMediaBadge socialMediaCaption={caption} profileImg={personCaption.img} />)
  return <div className="flex flex-wrap mx-4">{list}</div>
}

interface SocialMediaBadgePreviewProps {
  linkUrl?: string
  title?: string
  imgUrl?: string
  useProfileImg?: boolean
  profileImg?: string
}
export const SocialMediaBadgePreview: React.FC<SocialMediaBadgePreviewProps> = ({ linkUrl, title, imgUrl, useProfileImg, profileImg }) => {
  const serviceType = judgeServiceOrUndefined(linkUrl)
  const serviceColor =  getServiceColor(serviceType)
  const displayTitle = title || (serviceType !== 'Others' ? serviceType : '')
  return (
    <SocialMediaBadgeBase
      title={displayTitle || ''}
      linkUrl={linkUrl || ''}
      color={serviceColor}
      imgUrl={useProfileImg ? profileImg : imgUrl}
    />
  )
}
