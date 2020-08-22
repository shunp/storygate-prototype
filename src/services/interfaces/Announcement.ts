import { Dayjs } from 'dayjs'

export interface Announcement {
  authorName: string
  message: string
  createdAt: Dayjs
}
