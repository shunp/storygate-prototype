import { Message, ReadMarker, ChatRoom } from 'src/services/interfaces/Chat'
import { ChatRoomData } from 'src/services/firebase/firestore'

export class ChatRoomModel implements ChatRoom {
  constructor(readonly id: string, readonly readMarker: ReadMarker, private _messages: Message[] = []) {}

  get oldestSequence() {
    if (!this.messages.length) {
      return 0
    }
    return this.messages[0].sequenceId
  }

  get latestSequence() {
    if (!this.messages.length) {
      return 0
    }
    return this.messages[this.messages.length - 1].sequenceId
  }

  static fromData = (data: ChatRoomData) => {
    const { id, readMarker } = data
    return new ChatRoomModel(id, readMarker)
  }

  get messages() {
    return this._messages
  }

  addMessage = (messages: Message[]) => {
    const unexistMessages = messages.filter(message => !this.hasMessage(message))
    this._messages = this.messages.concat(unexistMessages).sort((a, b) => (a.sequenceId > b.sequenceId ? 1 : -1))
  }

  hasMessage = (message: Message) => this.messages.findIndex(existMessage => existMessage.equals(message)) >= 0
}
