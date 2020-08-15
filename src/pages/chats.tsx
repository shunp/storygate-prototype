import * as React from 'react'
import PageRoot from 'src/components/Root/PageRoot'
import Header from 'src/components/Header/index'
import { Router } from '@reach/router'

import 'react-chat-widget/lib/styles.css'
import ChatPageLayout from 'src/components/Chat/ChatPageLayout'

const ChatPage: React.FC = () => {
  return (
    <PageRoot>
      <Header />
      <Router>
        <ChatPageLayout path="chats/:pageId" pageId="" />
      </Router>
    </PageRoot>
  )
}

export default ChatPage
