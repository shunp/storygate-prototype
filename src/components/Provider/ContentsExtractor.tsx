import { PostType } from './providers'

interface ContentElement {
  type: PostType
  key: string
}
const judgeType = (url: URL): PostType => {
  const { hostname } = url
  if (hostname.includes('youtube')) {
    return 'YouTubePost'
  }
  if (hostname.includes('twitter.com')) {
    return 'TwitterPost'
  }
  if (hostname.includes('instagram.com')) {
    return 'InstagramPost'
  }
  if (hostname.includes('facebook.com')) {
    return 'FacebookPost'
  }
  return 'GeneralURL'
}

const YouTubeUrlRegex = /(?:\/|[?&]v=)([-\w]{11})(?:\/|\?|&|$)/
const TwitterUrlRegex = /status\/([0-9]*)(?:\?|$)/
const FacebookUrlRegex = /([.\w]*\/posts\/[0-9]*)(?:\/|\?|$)/
const InstagramUrlRegex = /p\/([-\w]*)(?:\/|\?|$)/
const extractKey = (type: string, url: string): string => {
  if (type === 'YouTubePost') {
    const result = YouTubeUrlRegex.exec(url)
    return (result?.length && result[1]) || ''
  }
  if (type === 'TwitterPost') {
    const result = TwitterUrlRegex.exec(url)
    return (result?.length && result[1]) || ''
  }
  if (type === 'InstagramPost') {
    const result = InstagramUrlRegex.exec(url)
    return (result?.length && result[1]) || ''
  }
  if (type === 'FacebookPost') {
    const result = FacebookUrlRegex.exec(url)
    return (result?.length && encodeURIComponent(`https://www.facebook.com/${result[1]}`)) || ''
  }
  return url
}
export const extractFromUrl = (url: string): ContentElement => {
  const type = judgeType(new URL(url))
  const key = extractKey(type, url)
  return { type, key }
}
