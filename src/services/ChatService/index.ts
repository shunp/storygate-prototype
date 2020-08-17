import {
  updateReadMarker,
  fetchChatRooms,
  fetchChatMessages,
  sendMessage,
  fetchChatRoomById,
  subscribeRoom,
  unsubscribeRoom
} from 'src/services/firebase/firestore'

import { MessageModel } from './MessageModel'
import { ChatRoomModel } from './ChatRoomModel'
import { Message } from '../interfaces/Chat'

const toDMId = (uid1: string, uid2: string) => {
  return [uid1, uid2].sort().join('_')
}

class Service {
  fetchDMRoom = async (uid1: string, uid2: string) => {
    return ChatRoomModel.fromData(await fetchChatRoomById(toDMId(uid1, uid2)))
  }

  fetchChatRooms = async (uid: string) => {
    return fetchChatRooms(uid)
  }

  fetchById = async (roomId: string, sequenceFrom: number, limit = 15, offset = 5) => {
    const data = await fetchChatMessages(roomId, sequenceFrom, limit, offset)
    return data.map(each => MessageModel.fromMessageData(each))
  }

  send = async (uid: string, roomId: string, message: string) => {
    await sendMessage(uid, roomId, message).catch(() => sendMessage(uid, roomId, message))
  }

  markAsRead = async (uid: string, roomId: string, sequnceId: string) => {
    await updateReadMarker(uid, roomId, sequnceId)
  }

  subscribe = (roomId: string, onUpdate: (message: Message[]) => void) => {
    subscribeRoom(roomId, data => onUpdate(data.map(each => MessageModel.fromMessageData(each))))
  }

  unsubscribe = (roomId: string) => {
    unsubscribeRoom(roomId)
  }
}

export const ChatService = new Service()
