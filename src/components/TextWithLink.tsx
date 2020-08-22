import * as React from 'react'
import Linkify from 'react-linkify'

interface TextWithLinkProps {
  text: string
}
export const TextWithLink: React.FC<TextWithLinkProps> = ({ text }) => {
  return <Linkify>{text}</Linkify>
}
