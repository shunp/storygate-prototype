interface ContentElement {
  type: string
  key: string
}
const judgeType = (url: URL): string => {
  const { hostname } = url
  if (hostname.includes('youtube')) {
    return 'YouTubePost'
  }
  return 'GeenralURL'
}

const YouTubeUrlRegex = /(?:\/|[?&]v=)([-\w]{11})(?:\/|\?|&|$)/
const extractKey = (type: string, url: string): string => {
  if (type === 'YouTubePost') {
    const result = YouTubeUrlRegex.exec(url)
    return (result?.length && result[1]) || ''
  }
  return url
}
export const extractFromUrl = (url: string): ContentElement => {
  const type = judgeType(new URL(url))
  const key = extractKey(type, url)
  return { type, key }
}
