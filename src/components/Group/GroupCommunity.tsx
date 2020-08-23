import * as React from 'react'
import { Link } from 'gatsby'
import { CommunityReference } from 'src/services/interfaces/CommunityCaption'
import { BasicTitleLine } from 'src/components/TitleLine'
import CommunityBackground from 'src/components/Community/CommunityBackground'
import CommunityCaption from 'src/components/Community/CommunityCaption'

interface GroupCommunityProps {
  community?: CommunityReference
}
export const GroupCommunity: React.FC<GroupCommunityProps> = ({ community }) => {
  if (!community) {
    return <></>
  }
  return (
    <>
      <BasicTitleLine title="Community" />
      <Link to={`/communities/${community.pageId}`}>
        <CommunityBackground img={community.backgroundImg} />
      </Link>
      <CommunityCaption name={community.name} num={community.numOfMembers} />
    </>
  )
}
