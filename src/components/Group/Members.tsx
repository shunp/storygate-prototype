import * as React from 'react'
import { Person } from 'src/services/interfaces/Person'
import { Link } from 'gatsby'

interface MemberProps {
  name: string
  pageId: string
  img?: string
}
const Member: React.FC<MemberProps> = ({ name, pageId, img }) => {
  return (
    <div className="p-3 w-1/3">
      <Link to={`/persons/${pageId}`} className="flex flex-col items-center">
        <img src={img} width={140} alt="" className="w-24 h-24 rounded-full" />
        <div>{name}</div>
      </Link>
    </div>
  )
}
interface MembersProps {
  members: Person[]
  filterWords: string[]
}
export const Members: React.FC<MembersProps> = ({ members, filterWords }) => {
  const MemberComponents = members
    .filter(m => {
      if (filterWords.length === 0) {
        return true
      }
      const containInName = filterWords.map(f => m.name.toLowerCase().includes(f))
      const containInTitle = filterWords.map(f => m.title.toLowerCase().includes(f))
      const containInIntroduction = filterWords.map(f => m.introduction.toLowerCase().includes(f))
      const results = [...containInName, ...containInTitle, ...containInIntroduction]
      const finalResult = results.some(r => r)
      return finalResult
    })
    .map(member => {
      return <Member name={member.name} pageId={member.pageId} img={member.img} />
    })
  return <>{MemberComponents}</>
}
