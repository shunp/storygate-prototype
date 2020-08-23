import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import 'src/styles/chat.css'
import { LoginUser } from 'src/services/interfaces/Auth'
import { Message, ChatRoom } from 'src/services/interfaces/Chat'
import { ChatService } from 'src/services/ChatService'
import { ChatBox } from './ChatBox'

const OpenChatButton = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      <FontAwesomeIcon icon={faCommentDots} size="2x" className="text-gray-500 mt-2" />
    </button>
  )
}

const openChatBox = () => {
  // TODO: load by chatBoxId
  if (document.getElementById('chat-box-toggle')) {
    document.getElementById('chat-box-toggle').checked = true
  }
}
const closeChatBox = () => {
  console.log('close')
  if (document.getElementById('chat-box-toggle')) {
    document.getElementById('chat-box-toggle').checked = false
  }
}

interface ChatProps {
  loginUser: LoginUser
  roomId: string
}

const Chat: React.FC<ChatProps> = ({ loginUser, roomId }) => {
  const [chatRoom, setChatRoom] = React.useState<ChatRoom>()
  const [messages, setMessages] = React.useState<Message[]>([])
  const fetchNewMessage = async () => {
    if (!chatRoom) {
      return
    }
    const fetchedMessages = await ChatService.fetchById(chatRoom.id, chatRoom.latestSequence)
    chatRoom.addMessage(fetchedMessages)
    setMessages(chatRoom.messages)
  }
  const sendMessage = async (message: string) => {
    if (!chatRoom) {
      return
    }
    await ChatService.send(loginUser.uid, chatRoom.id, message)
  }
  return (
    <>
      <OpenChatButton
        onClick={async () => {
          const fetchedChatRoom = await ChatService.fetchRoomById(roomId)
          const fetchedMessages = await ChatService.fetchById(fetchedChatRoom.id, 0)
          setChatRoom(fetchedChatRoom)
          fetchedChatRoom.addMessage(fetchedMessages)
          setMessages(fetchedMessages)
          ChatService.subscribe(fetchedChatRoom.id, updatedMessages => {
            fetchedChatRoom.addMessage(updatedMessages)
            setMessages(fetchedChatRoom.messages)
          })
          openChatBox()
        }}
      />
      <div className="chat-box-wrap">
        <input id="chat-box-toggle" type="checkbox" className="toggler hidden" />
        <div className="hamburger">
          <div />
        </div>
        <ChatBox
          messages={messages}
          loginUserId={loginUser.uid}
          sendMessage={sendMessage}
          closeChatBox={() => {
            if (chatRoom) {
              ChatService.unsubscribe(chatRoom.id)
            }
            closeChatBox()
          }}
        />
      </div>
    </>
  )
}

interface ChatDMProps {
  loginUser: LoginUser
  to: string
}

export const ChatDM: React.FC<ChatDMProps> = ({ loginUser, to }) => {
  return <Chat loginUser={loginUser} roomId={ChatService.toDMId(loginUser.uid, to)} />
}
export const ChatGroup: React.FC<ChatProps> = ({ loginUser, roomId }) => {
  return <Chat loginUser={loginUser} roomId={roomId} />
}
