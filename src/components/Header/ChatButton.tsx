import * as React from 'react'
import { css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { valueToHash } from 'src/utils/hash'
import { faCommentDots, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import 'src/styles/chat.css'
import { useWindowSize } from 'src/utils/useWindowSize'
import { Montserrat } from '../SGText'

interface ChatButtonProps {
  from: string
  to: string
}

const OpenChatButton = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      <FontAwesomeIcon icon={faCommentDots} size="2x" className="text-white mt-2" />
    </button>
  )
}

const SubmitChatButton = ({ onClick }) => {
  return (
    <button type="button" className="mx-2" onClick={onClick}>
      <FontAwesomeIcon icon={faPaperPlane} size="lg" className="text-white mt-2" />
    </button>
  )
}

const loadChatHistory = (chatBoxId: number) => {
  return [
    {
      msgId: '123',
      mine: true, // my message or others
      text: '初めまして',
      userId: '',
      timestamp: '',
      date: ''
      // read: true
    },
    {
      msgId: '124',
      mine: false,
      text: 'どうもです',
      userId: '',
      timestamp: '',
      data: '',
      read: true
    }
  ]
}

const ChatMessage = ({ mine = false, children }) => {
  if (mine) {
    return (
      <div className="flex justify-end">
        <div className="bg-white px-3 py-1 rounded-lg my-1 text-left leading-5 ml-10">{children}</div>
      </div>
    )
  }
  return (
    <div className="flex justify-start">
      <div className="bg-white px-3 py-1 rounded-lg my-1 text-left leading-5 mr-10">{children}</div>
    </div>
  )
}

const ChatButton: React.FC<ChatButtonProps> = ({ from, to }) => {
  const size = useWindowSize()
  const { height } = size

  const [newMessage, setNewMessage] = React.useState('')

  const openChatBox = (_from: string, _to: string) => {
    const chatBoxId = valueToHash(_from + _to)
    console.log('chatBoxId', chatBoxId)
    console.log('from ', from)
    console.log('to ', to)
    // TODO: load by chatBoxId
    const data = loadChatHistory(chatBoxId)
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

  const submitMessage = () => {
    console.log(newMessage)
    if (newMessage) {
      // TODO: security check -> prevent JS script or injection
      // TODO: save to DB
    }
    setNewMessage('')
  }

  return (
    <>
      <OpenChatButton onClick={() => openChatBox(from, to)} />
      <div className="chat-box-wrap">
        <input id="chat-box-toggle" type="checkbox" className="toggler" />
        <div className="hamburger">
          <div />
        </div>
        <div className="chat-box">
          <div className="flex-col">
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
                  value={newMessage}
                  onChange={e => setNewMessage(e.target.value)}
                />
                <SubmitChatButton onClick={submitMessage} />
              </div>
            </div>

            <div className="absolute w-2/3 h-screen">
              <div className="float-top m-2">
                <button type="button" className="text-white" onClick={closeChatBox}>
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
            <div className="w-2/3 h-screen mt-40">
              <div className="">
                <ChatMessage mine>こんにちは</ChatMessage>
                <ChatMessage>どうもですどうもです!!!</ChatMessage>
                <ChatMessage mine>今度の日曜日、ぜひ皆さんでお昼ご飯でもいかがですか？天気いいらしいですね。</ChatMessage>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ChatButton
