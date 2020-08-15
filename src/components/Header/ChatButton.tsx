import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const className = 'w-8 h-8 rounded-full z-20 bg-white'
interface ChatButtonProps {
  pageId: string
}
const ChatButton: React.FC<ChatButtonProps> = ({ pageId, children }) => {
  return <Link to={`/chats/${pageId}`}>{children}</Link>
}
export default ChatButton
