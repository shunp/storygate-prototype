import * as React from 'react'
import { YouTubePost } from './YouTube'
import { TwitterPost } from './Twitter'

const Portfolio = ({ data, size }) => {
  if (!data) {
    return <></>
  }
  return data.map(p => {
    switch (p.type) {
      case 'YouTubePost':
        return <YouTubePost title={p.title} iframeKey={p.iframeKey} text={p.text} size={size} />
      case 'TwitterPost':
        return <TwitterPost title={p.title} iframeKey={p.iframeKey} text={p.text} size={size} />
      default:
        return <></>
    }
  })
}
export default Portfolio
