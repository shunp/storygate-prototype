import * as React from 'react'

const PostType = ['YouTube', 'Twitter', 'Note.com', 'Facebook', 'Instagram', 'StoryGate'] as const

const ServiceType = ['YouTube', 'Twitter', 'Note.com', 'Facebook', 'Instagram', 'StoryGate', 'LinkedIn', 'Others'] as const

export type PostType = typeof PostType[number]
export type ServiceType = typeof ServiceType[number]
