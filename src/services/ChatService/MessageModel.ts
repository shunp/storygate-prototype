import dayjs, { Dayjs } from 'dayjs'
import { Message } from 'src/services/interfaces/Chat'
import { MessageData } from 'src/services/firebase/firestore'

export class MessageModel implements Message {
  constructor(readonly sequenceId: number, readonly uid: string, readonly message: string, readonly timestamp: Dayjs) {}

  static fromMessageData(data: MessageData): Message {
    const { sequenceId, uid, message, timestamp } = data
    return new MessageModel(+sequenceId, uid, message, dayjs(timestamp.toDate()))
  }

  isMine = (uid: string) => this.uid === uid

  equals = (message: Message) => this.sequenceId === message.sequenceId
}
