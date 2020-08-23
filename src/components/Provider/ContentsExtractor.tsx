import { SocialMediaCaption } from 'src/services/interfaces/Content'
import { PostType, ServiceType, getServiceColor } from './providers'

interface ContentElement {
  type: PostType
  key: string
}
const judgeType = (urlString: string): PostType => {
  if (!urlString.startsWith('https://')) {
    return 'Text'
  }
  const url = new URL(urlString)
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
const judgeService = (urlString: string): ServiceType => {
  if (!urlString.startsWith('https://')) {
    throw new Error('Invalid URL')
  }
  const url = new URL(urlString)
  const { hostname } = url
  if (hostname.includes('youtube')) {
    return 'YouTube'
  }
  if (hostname.includes('twitter.com')) {
    return 'Twitter'
  }
  if (hostname.includes('instagram.com')) {
    return 'Instagram'
  }
  if (hostname.includes('facebook.com')) {
    return 'Facebook'
  }
  if (hostname.includes('note.com')) {
    return 'Note.com'
  }
  if (hostname.includes('linkedin.com')) {
    return 'LinkedIn'
  }
  return 'Others'
}

export const judgeServiceOrUndefined = (urlString?: string): ServiceType | undefined => {
  if (!urlString) {
    return undefined
  }
  try {
    return judgeService(urlString)
  } catch {
    return undefined
  }
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
  const type = judgeType(url)
  const key = extractKey(type, url)
  return { type, key }
}

export const buildSocialMediaCaption = (
  title: string,
  url: string,
  imgUrl?: string,
  useProfileImg?: boolean,
  color?: string
): SocialMediaCaption => {
  const serviceName = judgeService(url)
  return {
    id: `social${new Date().getTime()}`,
    title,
    serviceName,
    linkUrl: url,
    serviceColor: color || getServiceColor(serviceName),
    imgUrl,
    useProfileImg: imgUrl ? false : useProfileImg
  }
}
