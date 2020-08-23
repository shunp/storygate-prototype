const PostType = ['YouTubePost', 'TwitterPost', 'FacebookPost', 'InstagramPost', 'GeneralURL', 'Text'] as const
const ServiceType = ['YouTube', 'Twitter', 'Note.com', 'Facebook', 'Instagram', 'StoryGate', 'LinkedIn', 'Others'] as const

export type PostType = typeof PostType[number]
export type ServiceType = typeof ServiceType[number]

type ServiceColor = {
  [key in ServiceType]: string
}
const DEFAULT_COLOR = 'gray-700'
const ServiceColorDict: ServiceColor = {
  YouTube: '',
  Twitter: 'social-twitter',
  Instagram: 'gradient-tl-instagram',
  Facebook: 'social-facebook',
  LinkedIn: 'social-linkedin',
  'Note.com': 'social-note',
  StoryGate: '',
  Others: DEFAULT_COLOR
}

export const getServiceColor = (serviceType?: ServiceType) => (serviceType ? ServiceColorDict[serviceType] : DEFAULT_COLOR)
