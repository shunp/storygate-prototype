import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { css } from '@emotion/core'
import { Message } from 'src/services/interfaces/Chat'
import { Montserrat } from '../SGText'

const CloseChatButton = ({ onClick }) => {
  return (
    <div className="absolute w-2/3 h-screen">
      <div className="float-top m-2">
        <button type="button" className="text-white" onClick={onClick}>
          <Montserrat className="text-white font-bold">
            <span className="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" enableBackground="new 0 0 40 40">
                <line x1="15" y1="15" x2="25" y2="25" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10" />
                <line x1="25" y1="15" x2="15" y2="25" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10" />
                <circle
                  className="circle"
                  cx="20"
                  cy="20"
                  r="19"
                  opacity="0"
                  stroke="#000"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  fill="none"
                />
                <path
                  d="M20 1c10.45 0 19 8.55 19 19s-8.55 19-19 19-19-8.55-19-19 8.55-19 19-19z"
                  className="progress"
                  stroke="#fff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  fill="none"
                />
              </svg>
            </span>
            Close
          </Montserrat>
        </button>
      </div>
    </div>
  )
}

const SubmitChatButton = ({ onClick }) => {
  return (
    <button type="button" className="mx-2" onClick={onClick}>
      <FontAwesomeIcon icon={faPaperPlane} size="lg" className="text-white mt-2" />
    </button>
  )
}
const TextInputArea = ({ sendMessage }) => {
  const [message, setMessage] = React.useState('')
  return (
    <div className="absolute w-2/3 h-screen">
      <div
        className="z-30 w-full"
        css={css`
          position: absolute;
          bottom: 10px;
        `}
      >
        <input
          type="text"
          placeholder="message..."
          className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-lg focus:outline-none"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <SubmitChatButton
          onClick={async () => {
            await sendMessage(message)
            setMessage('')
          }}
        />
      </div>
    </div>
  )
}

interface ChatMessageProps {
  message: Message
  loginUserId: string
}
const ChatMessage: React.FC<ChatMessageProps> = ({ message, loginUserId }) => {
  if (message.isMine(loginUserId)) {
    return (
      <div className="flex justify-end">
        <div className="bg-white px-3 py-1 rounded-lg my-1 text-left leading-5 ml-10">{message.message}</div>
      </div>
    )
  }
  return (
    <div className="flex justify-start">
      <div className="bg-white px-3 py-1 rounded-lg my-1 text-left leading-5 mr-10">{message.message}</div>
    </div>
  )
}
interface ChatBoxProps {
  messages: Message[]
  loginUserId: string
  closeChatBox: any
  sendMessage: any
}
export const ChatBox: React.FC<ChatBoxProps> = ({ messages, loginUserId, closeChatBox, sendMessage }) => {
  return (
    <div className="chat-box">
      <div className="flex-col">
        <TextInputArea sendMessage={sendMessage} />
        <CloseChatButton onClick={closeChatBox} />
        <div className="w-2/3 h-screen mt-40 ">
          <div className="">
            {messages.map(message => (
              <ChatMessage key={message.sequenceId} message={message} loginUserId={loginUserId} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
