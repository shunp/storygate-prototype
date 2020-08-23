import * as React from 'react'
import { SocialMediaCaption } from 'src/services/interfaces/Content'
import { Person } from 'src/services/interfaces/Person'
import { DefaultPostModal } from 'src/components/Content/modal/PostModal'
import { EditingButton, EditingButtonSet, DeleteButton } from 'src/components/EditButton'
import { SocialMediaBadge, SocialMediaBadges } from './SocialMediaBadge'
import { NewSocialMediaForm } from './NewSocialMedaBadgeForm'

interface ModifiableSocialBadgesProps {
  socialMediaCaptions: SocialMediaCaption[]
  personCaption: Person
  setEditingSocialMediaCaptions: (updatedSocialMediaCaptions: SocialMediaCaption[]) => void
}
const ModifiableSocialBadges: React.FC<ModifiableSocialBadgesProps> = ({
  socialMediaCaptions,
  personCaption,
  setEditingSocialMediaCaptions
}) => {
  const list = socialMediaCaptions.map(caption => (
    <div key={caption.id} className="flex">
      <DeleteButton onClick={() => setEditingSocialMediaCaptions(socialMediaCaptions.filter(each => each.id !== caption.id))} />
      <SocialMediaBadge socialMediaCaption={caption} profileImg={personCaption.img} />
    </div>
  ))
  return (
    <>
      <NewSocialMediaForm
        profileImg={personCaption.img}
        addSocialMediaCaption={newSocialMediaCaption => setEditingSocialMediaCaptions(socialMediaCaptions.concat(newSocialMediaCaption))}
      />
      <div>{list}</div>
    </>
  )
}
interface ModifiableSocialMediaBadgesProps {
  socialMediaCaptions: SocialMediaCaption[]
  personCaption: Person
  update: (socialMediaCaptions: SocialMediaCaption[]) => Promise<void>
}
export const ModifiableSocialMediaBadges: React.FC<ModifiableSocialMediaBadgesProps> = ({ socialMediaCaptions, personCaption, update }) => {
  const [badgesEditing, setBadgesEditing] = React.useState(false)
  const [editingSocialMediaCaptions, setEditingSocialMediaCaptions] = React.useState<SocialMediaCaption[]>(socialMediaCaptions)
  React.useEffect(() => {
    setEditingSocialMediaCaptions(socialMediaCaptions)
  }, [socialMediaCaptions])
  return (
    <>
      <div>
        <EditingButtonSet DeleteButton={<></>} EditingButton={<EditingButton onClick={() => setBadgesEditing(true)} />} className="mt-1" />
        <div className="text-center text-lg font-bold">Your Social Media</div>
      </div>
      <SocialMediaBadges socialMediaCaptions={socialMediaCaptions} personCaption={personCaption} />
      <DefaultPostModal
        id="socialBadges"
        Post={
          <ModifiableSocialBadges
            socialMediaCaptions={editingSocialMediaCaptions}
            setEditingSocialMediaCaptions={updatedSocialMediaCaptions => setEditingSocialMediaCaptions(updatedSocialMediaCaptions)}
            personCaption={personCaption}
          />
        }
        editing={badgesEditing}
        onClear={() => {
          setBadgesEditing(false)
          setEditingSocialMediaCaptions(socialMediaCaptions)
        }}
        onDone={async () => {
          await update(editingSocialMediaCaptions)
          setBadgesEditing(false)
        }}
        onFocusOut={() => setBadgesEditing(false)}
      />
    </>
  )
}
