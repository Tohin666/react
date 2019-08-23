import './CommentsContainer.css';

import CommentForm from 'components/CommentForm'
import CommentsList from 'components/CommentsList'

import React, { Component, Fragment } from 'react';
    
    export default class CommentsContainer extends Component {
      constructor(props) {
          super(props);
      
          this.state = {
            loading: true, 
            comments: [],
            page: 1
          };
        }

      //methods      
      
      loadComments = () => {
        //AJAX
        const { page } = this.state
        this.setState ({ loading: true })

        fetch (`https://jsonplaceholder.typicode.com/comments?_limit=15&_page=${ page }`)
          .then ((response) => response.json ())
          .then ((comments) => {
            this.setState ({
              loading: false,
              comments: this.state.comments.concat (comments)
            })
          })
          .catch (() => { this.setState ({ loading: false }) })
      }

      handleScroll = () => {
        // console.log(document.documentElement.clientHeight, window.scrollY, window.innerHeight, document.documentElement.clientHeight - window.scrollY - window.innerHeight)
        if (document.documentElement.clientHeight - window.scrollY - window.innerHeight === 0) {
          if (!this.state.loading) {
            this.loadComments ()
          }
        }
      }

      componentDidMount () {
        this.loadComments ()

        window.addEventListener ('scroll', this.handleScroll)
      }

      componentWillUnmount () {
        window.removeEventListener ('scroll', this.handleScroll)
      }

      render() {
        const { comments, loading } = this.state

        return (
          <Fragment>
            {/* <CommentForm onSend={this.handleComment} /> */}
            <CommentsList comments={comments}/> { loading ? 'PROCESSING...' : '' }
          </Fragment>
        )
      }
    }