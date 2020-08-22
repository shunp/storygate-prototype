import * as React from 'react'
import { SocialMediaCaption } from 'src/services/interfaces/Content'
import { Person } from 'src/services/interfaces/Person'
import { Montserrat } from '../SGText'
import { ServiceType } from '../Provider/providers'
import CaptionProfileImg from './Caption/CaptionProfileImg'

const data = [
  {
    serviceName: 'Facebook',
    serviceColor: 'social-facebook',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/baiUK5z4NYhFscfuwpJuT7NTwZs2%2Fprofile.jpg?alt=media&token=56a52afe-7ca6-47f7-bbfb-c3139d2ae20d',
    linkUrl: 'https://www.facebook.com/shunpei.koike.9'
  },
  {
    serviceName: 'LinkedIn',
    serviceColor: 'social-linkedin',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/baiUK5z4NYhFscfuwpJuT7NTwZs2%2Fprofile.jpg?alt=media&token=56a52afe-7ca6-47f7-bbfb-c3139d2ae20d',
    linkUrl: 'https://www.linkedin.com/in/shumpeikoike/'
  },
  {
    serviceName: 'Instagram',
    serviceColor: 'gradient-tl-instagram',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/baiUK5z4NYhFscfuwpJuT7NTwZs2%2Fprofile.jpg?alt=media&token=56a52afe-7ca6-47f7-bbfb-c3139d2ae20d',
    linkUrl: 'https://www.linkedin.com/in/shumpeikoike/'
  },
  {
    serviceName: 'Note',
    serviceColor: 'social-note',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/baiUK5z4NYhFscfuwpJuT7NTwZs2%2Fprofile.jpg?alt=media&token=56a52afe-7ca6-47f7-bbfb-c3139d2ae20d',
    linkUrl: 'https://www.linkedin.com/in/shumpeikoike/'
  },
  {
    serviceName: 'Twitter',
    serviceColor: 'social-twitter',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/baiUK5z4NYhFscfuwpJuT7NTwZs2%2Fprofile.jpg?alt=media&token=56a52afe-7ca6-47f7-bbfb-c3139d2ae20d',
    linkUrl: 'https://www.linkedin.com/in/shumpeikoike/'
  }
]

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
  index: number
  openTab: number
  socialMediaCaptions: SocialMediaCaption[]
  personCaption: Person
}
export const SocialBadgeList: React.FC<SocialBadgeListProps> = ({ index, openTab, socialMediaCaptions, personCaption }) => {
  const list = socialMediaCaptions.map(caption => <SocialMediaBadge socialMediaCaption={caption} profileImg={personCaption.img} />)
  return (
    <div className={openTab === index ? 'block' : 'hidden'} id={`link${index}`}>
      <div className="flex flex-wrap mx-4">{list}</div>
    </div>
  )
}
