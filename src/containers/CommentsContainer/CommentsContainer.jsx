import './CommentsContainer.css'

import CommentForm from 'components/CommentForm'
import CommentsList from 'components/CommentsList'

import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux' // метод для связи с редаксом
import { load } from 'actions/comments' // экшн который мы создали

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

  // handleScroll = () => {
  //   // console.log(document.documentElement.clientHeight, window.scrollY, window.innerHeight, document.documentElement.clientHeight - window.scrollY - window.innerHeight)
  //   if (document.documentElement.clientHeight - window.scrollY - window.innerHeight === 0) {
  //     if (!this.state.loading) {
  //       this.loadComments ()
  //     }
  //   }
  // }

  componentDidMount() {
    const { loadComments } = this.props // loadComments внизу в mapDispatchToProps
    loadComments()

    // window.addEventListener ('scroll', this.handleScroll)
  }

  // componentWillUnmount () {
  //   window.removeEventListener ('scroll', this.handleScroll)
  // }

  render() {
    const { comments, loading } = this.props // теперь используем не стейты а пропсы
    // const { comments, loading } = this.state

    return (
      <Fragment>
        {/* <CommentForm onSend={this.handleComment} /> */}
        <CommentsList comments={comments} /> {loading ? 'PROCESSING...' : ''}
      </Fragment>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    ...props,
    comments: state.comments.entities, // из редюсера комментс берем энтитис и добавляем в пропс комментс
    loading: state.comments.loading, // из редюсера комментс берем лоадинг и добавляем в пропс лоадинг
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    loadComments: () => load(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer) // замыкание. запускает функцию которая возвращается