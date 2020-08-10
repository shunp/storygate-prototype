const PostType = ['YouTubePost', 'TwitterPost', 'FacebookPost', 'InstagramPost', 'GeneralURL', 'Text'] as const
const ServiceType = ['YouTube', 'Twitter', 'Note.com', 'Facebook', 'Instagram', 'StoryGate', 'LinkedIn', 'Others'] as const

export type PostType = typeof PostType[number]
export type ServiceType = typeof ServiceType[number]
