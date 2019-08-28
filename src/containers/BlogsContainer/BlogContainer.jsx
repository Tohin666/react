import Blog from 'components/Blog'
import CommentForm from 'components/CommentForm'
// настроили алиасы на containers и components
import CommentsContainer from 'containers/CommentsContainer'

import React, { Component, Fragment } from 'react';

export default class BlogContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      blog: {},
      comments: [],
    };
  }

  //methods      

  componentDidMount() {
    const { match } = this.props // достаем по шаблону :id из роутсов
    this.setState({ loading: true })

    fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
      .then((response) => response.json())
      .then((blog) => {
        this.setState({
          loading: false,
          blog
        })
      })
      .catch(() => { this.setState({ loading: false }) })
  }

  handleComment = (comment) => {
    this.setState((prev) => ({
      ...prev,
      comments: prev.comments.concat([comment])
    }))
  }


  render() {
    const { blog } = this.state
    const { comments } = this.state

    return (
      <Fragment>
        <div>
          <Blog title={blog.title} body={blog.body} />
          <br /><hr />
          <CommentForm onSend={this.handleComment} />
          <br />
          <ul>
            {comments.map((comment, idx) => <li key={idx}><h3>{comment.author}</h3><p>{comment.message}</p></li>)}
          </ul>
          <CommentsContainer />
        </div>
      </Fragment>
    )
  }
}