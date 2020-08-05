const SCRAPER_KEY = process.env.GATSBY_SCRAPER_KEY
const OG_IMAGE_TAG = '<meta property="og:image"'
const OG_SITE_NAME_TAG = '<meta property="og:site_name"'
const OG_DESCRIPTION_TAG = '<meta property="og:description"'

export class OgTag {
  ogImg: string

  ogSiteName: string

  ogDescription: string

  // ogURL: string

  constructor() {
    this.ogImg = ''
    this.ogSiteName = ''
    this.ogDescription = ''
    // this.ogURL = ''
  }

  getEndpoint = (targetURL: string) => {
    return `https://api.scraperapi.com?api_key=${SCRAPER_KEY}&url=${targetURL}`
  }

  // only called when registering a new content
  fetch = async (URL: string) => {
    const response = await fetch(this.getEndpoint(URL))
    const text = await response.text()
    const array = text.split(/\n/)
    // const ogURLTag = '<meta property="og:url"'
    const fetchedOgImg = array.filter(line => line.includes(OG_IMAGE_TAG))
    const fetchedOgSiteName = array.filter(line => line.includes(OG_SITE_NAME_TAG))
    const fetchedOgDescription = array.filter(line => line.includes(OG_DESCRIPTION_TAG))

    const imageContent = fetchedOgImg[0].split('content=')[1]
    const siteNameContent = fetchedOgSiteName[0].split('content=')[1]
    const descriptionContent = fetchedOgDescription[0].split('content=')[1]
    this.ogImg = imageContent
    this.ogSiteName = siteNameContent
    this.ogSiteName = descriptionContent
    return this
  }
}
