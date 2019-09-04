import React, { Component, Fragment } from 'react'

import MessageForm from 'components/MessageForm'
import MessagesList from 'components/MessagesList'


import { connect } from 'react-redux'
import { load, send, listen } from 'actions/messages'

class MessagesContainer extends Component {

  componentDidMount() {
    const { loadMessages, listenMessages } = this.props
    loadMessages()
    listenMessages()
  }

  render() {
    const { messages, send } = this.props

    return (
      <Fragment>
        <div>
          <MessagesList messages={messages} />
          <MessageForm send={send} />
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    ...props,
    messages: state.messages.entities,
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    loadMessages: () => dispatch(load()),
    listenMessages: () => dispatch(listen()),
    send: (message) => send(message),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer) // замыкание. запускает функцию которая возвращается