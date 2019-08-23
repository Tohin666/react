import './CommentForm.css';

import React, { Component, Fragment } from 'react';
import { Card, Button, CardHeader, CardBody, Input, InputGroup } from 'reactstrap';

export default class CommentForm extends Component {
  constructor (props) {
    super (props)

    this.state = {
      author: '',
      message: '',
      // comments: []
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
    // const { comments } = this.state
    
    return (
      <Fragment>
        <Card>
            <CardHeader tag="h3">Leave a Comment:</CardHeader>
            <CardBody>                
                  <Input value={ author } onChange={this.handleChange} name="author" placeholder="Name" /><br/>
                  <Input type="textarea" name="message" rows="3" onChange={this.handleChange} value={ message } /><br/>
                  <Button onClick={this.handleClick}>Submit</Button>                
            </CardBody>
        </Card>
        {/* <ul>
            {comments.map ((comment, idx) => <li key={idx}><h3>{comment.author}</h3><p>{comment.message}</p></li>)}
        </ul> */}
      </Fragment>
    )
  }
}