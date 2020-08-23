import * as React from 'react'
import { BasicTitleLine } from 'src/components/TitleLine'
import { Announcement } from 'src/services/interfaces/Announcement'
import { TextWithLink } from 'src/components/TextWithLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { DefaultPostModal } from '../Content/modal/PostModal'

interface ModifiableAnnoucementProps {
  message: string
  onChange: (message: string) => void
}
const ModifiableAnnoucement: React.FC<ModifiableAnnoucementProps> = ({ message, onChange }) => (
  <textarea
    className="border-2 border-gray-300 focus:outline-none bg-white w-full h-64 px-2 rounded-lg whitespace-pre-wrap"
    value={message}
    onChange={e => onChange(e.target.value)}
    placeholder="announcement..."
  />
)

interface AnnoucementContentProps {
  announcement?: Announcement
  joined: boolean
  onEditButtonClick: () => void
}
const AnnoucementContent: React.FC<AnnoucementContentProps> = ({ announcement, joined, onEditButtonClick }) => {
  if (!joined && !announcement) {
    return <></>
  }
  if (!announcement) {
    return <FontAwesomeIcon size="2x" className="text-gray-500 m-2" icon={faEdit} onClick={onEditButtonClick} />
  }
  return (
    <div id="announcement" className="max-w-sm rounded overflow-hidden shadow-lg w-full">
      <div className="p-4">
        <div className="flex justify-between text-gray-500">
          <div>{announcement.createdAt.format()}</div>
          {joined ? <FontAwesomeIcon icon={faEdit} onClick={onEditButtonClick} /> : ''}
        </div>
        <div className="p-2">
          <TextWithLink text={announcement.message} />
        </div>
        <div className="text-gray-500 text-right">{announcement.authorName}</div>
      </div>
    </div>
  )
}
interface AnnouncementComponentProps {
  announcement?: Announcement
  joined: boolean
  updateAnnouncement: (message: string) => Promise<void>
}
export const AnnouncementComponent: React.FC<AnnouncementComponentProps> = ({ announcement, joined, updateAnnouncement }) => {
  const [editing, setEditing] = React.useState(false)
  const [message, setMessage] = React.useState(announcement?.message || '')
  React.useEffect(() => {
    setMessage(announcement?.message || '')
  }, [announcement])
  return (
    <>
      <BasicTitleLine title="Announcement" />
      <AnnoucementContent announcement={announcement} joined={joined} onEditButtonClick={() => setEditing(true)} />
      <DefaultPostModal
        id="group-annouce"
        editing={editing}
        onClear={() => setMessage(announcement?.message || '')}
        onDone={() => updateAnnouncement(message)}
        Post={<ModifiableAnnoucement message={message} onChange={updateMessage => setMessage(updateMessage)} />}
      />
    </>
  )
}
