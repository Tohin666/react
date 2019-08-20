import './CommentForm.css';

import React, { Component, Fragment } from 'react';

export default class CommentForm extends Component {
  constructor (props) {
    super (props)

    this.state = {
      author: '',
      message: ''
    }
  }

  handleClick = (e) => {
    const { onSend } = this.props

    this.setState ({ message: ''})

    if (typeof onSend === 'function') {
      onSend (this.state)
    }
  }

  handleChange = (e) => {
    this.setState ({
      [e.target.name] : e.target.value // из ES7
    })
  }

  render() {
    let { author, message } = this.state
    
    return (
      <Fragment>
        <input type="text" value={ author } onChange={this.handleChange} name="author"/>

        <br/><br/>

        <textarea name="message" id="" cols="30" rows="10" onChange={this.handleChange} value={ message }></textarea>

        <br/><br/>

        <button onClick={this.handleClick}>Send</button>
      </Fragment>
    )
  }
}