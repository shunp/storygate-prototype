import * as React from 'react'
import { Link } from 'gatsby'
import { display } from 'src/utils/numeral'
import { CommunityReference } from 'src/services/interfaces/CommunityCaption'
import { CompleteButtonSet } from '../EditButton'
import ClearButton from '../ClearButton'
import DoneButton from '../DeleteButton'

interface CommunityPanelProps {
  pageId: string
  name: string
  num: number
  hidden?: boolean
}

const CommunityPanel: React.FC<CommunityPanelProps> = ({ pageId, name, num, hidden }) => {
  return (
    <div className="font-semibold italic text-primary text-center py-3 shadow-lg">
      <Link to={`/communities/${pageId}`}>
        {hidden ? '<Secret>' : ''} {name} ({display(num)}人)
      </Link>
    </div>
  )
}
type ModifiableCommunityPanelProps = CommunityPanelProps & {
  toggleHidden: (communityId: string) => void
}
const ModifiableCommunityPanel: React.FC<ModifiableCommunityPanelProps> = ({ pageId, name, num, hidden, toggleHidden }) => {
  return (
    <div
      className="font-semibold italic text-primary text-center py-3 shadow-lg"
      role="button"
      onKeyPress={() => toggleHidden(pageId)}
      onClick={() => toggleHidden(pageId)}
      tabIndex={0}
    >
      {hidden ? '<Secret>' : ''} {name} ({display(num)}人)
    </div>
  )
}

interface CommunityListProps {
  communities: CommunityReference[]
  openCommunities: string[]
  size: number
}
export const CommunityList: React.FC<CommunityListProps> = ({ communities, openCommunities, size }) => {
  if (!communities) {
    return <></>
  }
  const CommuntyComponents = communities.map(d => (
    <CommunityPanel key={d.pageId} pageId={d.pageId} name={d.name} num={d.numOfMembers} hidden={!openCommunities.includes(d.pageId)} />
  ))
  return <>{CommuntyComponents}</>
}

type ModifiableCommunityList = CommunityListProps & {
  toggleEditingCommunity: () => void
  update: (openCommunities: string[]) => Promise<void>
}
export const ModifiableCommunityList: React.FC<ModifiableCommunityList> = ({
  communities,
  openCommunities,
  size,
  toggleEditingCommunity,
  update
}) => {
  const [editingOpenCommunities, setOpenCommunities] = React.useState(openCommunities)
  if (!communities) {
    return <></>
  }
  const toggleHidden = (toggledCommunityId: string) => {
    if (editingOpenCommunities.includes(toggledCommunityId)) {
      setOpenCommunities(editingOpenCommunities.filter(community => toggledCommunityId !== community))
      return
    }
    setOpenCommunities([...editingOpenCommunities, toggledCommunityId])
  }
  const CommuntyComponents = communities.map(d => (
    <ModifiableCommunityPanel
      key={d.pageId}
      pageId={d.pageId}
      name={d.name}
      num={d.numOfMembers}
      hidden={!editingOpenCommunities.includes(d.pageId)}
      toggleHidden={toggleHidden}
    />
  ))
  return (
    <>
      <CompleteButtonSet
        ClearButton={
          <ClearButton
            onClick={() => {
              setOpenCommunities(openCommunities)
              toggleEditingCommunity()
            }}
          />
        }
        DoneButton={
          <DoneButton
            onClick={async () => {
              await update(editingOpenCommunities)
              toggleEditingCommunity()
            }}
          />
        }
        className="-mt-5"
      />
      {CommuntyComponents}
    </>
  )
}
