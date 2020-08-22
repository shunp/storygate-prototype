import * as React from 'react'
import { SocialMediaCaption, ContentType } from 'src/services/interfaces/Content'
import { Person } from 'src/services/interfaces/Person'
import { Montserrat } from '../SGText'
import CaptionProfileImg from './Caption/CaptionProfileImg'
import { PersonTabContentWrapper } from './PersonTabContentWrapper'

interface SocialMediaBadgeProps {
  socialMediaCaption: SocialMediaCaption
  profileImg?: string
}
const SocialMediaBadge: React.FC<SocialMediaBadgeProps> = ({ socialMediaCaption, profileImg }) => {
  const { serviceName, serviceColor, imgUrl, linkUrl, useProfileImg } = socialMediaCaption
  return (
    <a href={linkUrl} target="_blank" rel="noreferrer" className="w-1/2">
      <div className={`flex flex-row items-center bg-${serviceColor} rounded-full py-1 px-1 mt-2 mx-2`}>
        <CaptionProfileImg profileImg={useProfileImg ? profileImg : imgUrl} className="rounded-full w-8 mr-2" />
        <Montserrat className="text-white text-md font-bold">{serviceName}</Montserrat>
      </div>
    </a>
  )
}

interface SocialBadgeListProps {
  currentTab: ContentType
  socialMediaCaptions: SocialMediaCaption[]
  personCaption: Person
}
export const SocialBadgeList: React.FC<SocialBadgeListProps> = ({ currentTab, socialMediaCaptions, personCaption }) => {
  const list = socialMediaCaptions.map(caption => <SocialMediaBadge socialMediaCaption={caption} profileImg={personCaption.img} />)
  return (
    <PersonTabContentWrapper currentTab={currentTab} contentType="Portfolio">
      <div className="flex flex-wrap mx-4">{list}</div>
    </PersonTabContentWrapper>
  )
}
