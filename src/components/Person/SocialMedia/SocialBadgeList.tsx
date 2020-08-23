import * as React from 'react'
import { SocialMediaCaption, ContentType } from 'src/services/interfaces/Content'
import { Person } from 'src/services/interfaces/Person'
import { PersonTabContentWrapper } from '../PersonTabContentWrapper'
import { SocialMediaBadges } from './SocialMediaBadge'
import { ModifiableSocialMediaBadges } from './ModifaibleSocialMediaBadges'

interface SocialBadgeListProps {
  currentTab: ContentType
  socialMediaCaptions: SocialMediaCaption[]
  personCaption: Person
  editing: boolean
  update: (socialMediaCaptions: SocialMediaCaption[]) => Promise<void>
}
export const SocialBadgeList: React.FC<SocialBadgeListProps> = ({ currentTab, socialMediaCaptions, personCaption, editing, update }) => {
  const BadgeList = editing ? (
    <ModifiableSocialMediaBadges socialMediaCaptions={socialMediaCaptions} personCaption={personCaption} update={update} />
  ) : (
    <SocialMediaBadges socialMediaCaptions={socialMediaCaptions} personCaption={personCaption} />
  )
  return (
    <PersonTabContentWrapper currentTab={currentTab} contentType="Portfolio">
      {BadgeList}
    </PersonTabContentWrapper>
  )
}
