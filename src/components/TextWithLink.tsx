import * as React from 'react'
import Linkify from 'react-linkify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const componentDecorator = (decoratedHref: string, decoratedText: string, key: number): React.ReactNode => (
  <a href={decoratedHref} key={key} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faLink} className="text-gray-500 mr-2" />
    {decoratedText}
  </a>
)

interface TextWithLinkProps {
  text: string
}
export const TextWithLink: React.FC<TextWithLinkProps> = ({ text }) => {
  return (
    <Linkify componentDecorator={componentDecorator}>
      <div className="whitespace-pre-wrap">{text}</div>
    </Linkify>
  )
}
