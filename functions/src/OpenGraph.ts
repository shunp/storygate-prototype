/* eslint-disable @typescript-eslint/camelcase */
import { https } from 'firebase-functions'
import { JSDOM } from 'jsdom'

const findOgImg = async (url: string) => {
  const dom = await JSDOM.fromURL(url)
  const metaTags = dom.window.document.getElementsByTagName('meta')
  let i = 0
  while (i < metaTags.length) {
    const tag = metaTags.item(i)
    const tagProperty = tag.getAttribute('property')
    if (tagProperty === 'og:image') {
      return tag.getAttribute('content')
    }
    i += 1
  }
  return ''
}

export const find = https.onCall(async (data, context) => {
  const { url } = data
  if (!url) {
    return {
      error: 'invalid request.'
    }
  }
  const ogImgUrl = await findOgImg(url)
  return { ogImg: ogImgUrl }
})
