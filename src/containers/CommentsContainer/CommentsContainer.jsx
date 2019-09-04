import './CommentsContainer.css'

import React, { Component, Fragment } from 'react'

import CommentForm from 'components/CommentForm'
import CommentsList from 'components/CommentsList'


import { connect } from 'react-redux' // метод для связи с редаксом
// import { load } from 'actions/comments' // экшн который мы создали
import { load, send, listen } from 'actions/messages'

class CommentsContainer extends Component {// экспортируем внизу
  // export default class CommentsContainer extends Component {
  // constructor(props) {
  //     super(props);

  //     this.state = {
  //       loading: true, 
  //       comments: [],
  //       page: 1
  //     };
  //   }

  //methods      

  // loadComments = () => {
  //   //AJAX
  //   const { page } = this.state
  //   this.setState ({ loading: true })

  //   fetch (`https://jsonplaceholder.typicode.com/comments?_limit=15&_page=${ page }`)
  //     .then ((response) => response.json ())
  //     .then ((comments) => {
  //       this.setState ({
  //         loading: false,
  //         comments: this.state.comments.concat (comments)
  //       })
  //     })
  //     .catch (() => { this.setState ({ loading: false }) })
  // }

  handleScroll = () => {
    const { loadComments } = this.props // loadComments внизу в mapDispatchToProps

    if (document.documentElement.clientHeight - window.scrollY - window.innerHeight === 0) {
      if (!this.props.loading) {
        loadComments()
      }
    }
  }

  componentDidMount() {
    const { loadMessages, listenMessages } = this.props
    loadMessages()
    listenMessages()
    // const { loadComments } = this.props // loadComments внизу в mapDispatchToProps
    // loadComments()

    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    const { messages, send } = this.props
    // const { comments, loading } = this.props // теперь используем не стейты а пропсы
    // const { comments, loading } = this.state

    return (
      <Fragment>
        <br /><hr />
        <CommentForm send={send} />
        {/* <CommentForm onSend={this.handleComment} /> */}
        <br />        
        <CommentsList messages={messages} />
        {/* <CommentsList comments={comments} /> {loading ? 'PROCESSING...' : ''} */}
      </Fragment>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    ...props,
    messages: state.messages.entities,
    // comments: state.comments.entities, // из редюсера комментс берем энтитис и добавляем в пропс комментс
    // loading: state.comments.loading, // из редюсера комментс берем лоадинг и добавляем в пропс лоадинг
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    loadMessages: () => dispatch(load()),
    listenMessages: () => dispatch(listen()),
    send: (message) => send(message),
    // loadComments: () => dispatch(load())
    // loadComments: () => load(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer) // замыкание. запускает функцию которая возвращается