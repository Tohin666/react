import './MessageForm.css';

import React, { Component, Fragment } from 'react';

export default class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: '',
      text: '',
    };
  }

  //methods
  handleChange = (e) => {
    this.setState ({
      [e.target.name]: e.target.value
    })
  }

  handleSend = () => {
    const { send } = this.props
    send(this.state)
    this.setState({text: ''})
  }

  render() {
    const {author, text} = this.state

    return (
      <Fragment>
        <div className="MessageForm">
          <input type="text" onChange={this.handleChange} value={author} name="author" />
          <br />
          <textarea onChange={this.handleChange} value={text} name="text" ></textarea>
          <br />
          <button onClick={this.handleSend} >Send</button>
        </div>
      </Fragment>
    )
  }
}