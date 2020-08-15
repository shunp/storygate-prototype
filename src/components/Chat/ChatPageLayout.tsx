import * as React from 'react'
import { connect } from 'react-redux'

import { State } from 'src/state'
// import { ChatService } from 'src/services/ChatService'

import { applyTheme } from 'src/themes/utils'
import { themes, DEFAULT_THEME } from 'src/themes'
import { Widget, addResponseMessage } from 'react-chat-widget'
import 'src/styles/chat.css'

const ChatPageLayout = ({ path, pageId }) => {
  const loadChat = async () => {
    //   await ChatService.fetchById(pageId).then(fetchedChat => setChat(fetchedChat))
  }

  React.useEffect(() => {
    if (!pageId) {
      return
    }
    applyTheme(DEFAULT_THEME, themes)
    loadChat()
  }, [pageId])

  const handleNewUserMessage = newMessage => {
    console.log(`New message incoming! ${newMessage}`)
    // Now send the message throught the backend API
  }
  return (
    <>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        // profileAvatar={logo}
        title="Chat Box"
        subtitle="マナーを守ったメッセージを心がけましょう。"
      />
    </>
  )
}

export default connect(
  (state, props) => ({
    path: props.path,
    pageId: props.pageId
  }),
  dispatch => ({})
)(ChatPageLayout)
