import * as React from 'react'
import { Link } from 'gatsby'
import { display } from 'src/utils/numeral'

interface CommunityPanelProps {
  title: string
  num: number
  link: string
}

const CommunityPanel: React.FC<CommunityPanelProps> = ({ title, num, link }) => {
  return (
    <div className="font-semibold italic text-primary text-center py-3 shadow-lg">
      <Link to={`/communities/${link}`}>
        {title} ({display(num)}人)
      </Link>
    </div>
  )
}

export const CommunityList = ({ data, size }) => {
  if (!data) {
    return <></>
  }
  return data.map(d => <CommunityPanel title={d.title} num={d.number} link={d.link} />)
}
