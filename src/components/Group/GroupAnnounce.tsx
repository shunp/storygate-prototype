import * as React from 'react'
import { BasicTitleLine } from 'src/components/TitleLine'
import { Announcement } from 'src/services/interfaces/Announcement'
import { TextWithLink } from 'src/components/TextWithLink'

interface GroupAnnounceProps {
  announcement?: Announcement
}
export const GroupAnnounce: React.FC<GroupAnnounceProps> = ({ announcement }) => {
  if (!announcement) {
    return <></>
  }
  return (
    <>
      <BasicTitleLine title="Announcement" />
      <div id="group-announcement" className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="p-4">
          <div className="text-gray-500">{announcement.createdAt.format()}</div>
          <div className="p-2">
            <TextWithLink text={announcement.message} />
          </div>
          <div className="text-gray-500 text-right">{announcement.authorName}</div>
        </div>
      </div>
    </>
  )
}
