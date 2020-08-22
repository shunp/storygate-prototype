import { Dayjs } from 'dayjs'

export interface ReadMarker {
  [key: string]: string
}
export interface Message {
  readonly uid: string
  readonly sequenceId: number
  readonly message: string
  readonly timestamp: Dayjs
  readonly isMine: (uid: string) => boolean
  readonly equals: (message: Message) => boolean
}
export interface ChatRoom {
  readonly id: string
  readonly readMarker: ReadMarker
  readonly messages: Message[]
  readonly oldestSequence: number
  readonly latestSequence: number
  addMessage: (messages: Message[]) => void
}
