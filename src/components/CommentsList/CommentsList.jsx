import './CommentsList.css';

import React, { Component, Fragment } from 'react';

export default class CommentsList extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  //methods

  render() {
    const { messages } = this.props
    // const { comments } = this.props

    return (
      <Fragment>
        <ul className="comments-list">
          {/* {comments.map(({ name, body }, idx) =>
            <li key={idx}>
              <h3> {name} </h3>
              <p> {body} </p>
            </li>)} */}
          {messages.map((el) => <li key={el._id}>
            <h3>{el.author}</h3>
            <p>{el.text}</p>
            <h4>{el.timeStamp}</h4>
          </li>)}
        </ul>
      </Fragment>
    )
  }
}