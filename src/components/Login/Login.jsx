import React, { Component, Fragment } from 'react'

import './Login.css'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
    }

    render () {        
        return (
            <Fragment>                
                <Button color="danger" onClick={this.toggle} className="login-button">Login</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Login, please</ModalHeader>
                <ModalBody>
                    <Input placeholder="Login"/><br/>
                    <Input type="password" placeholder="Password"/>                                       
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Login</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
                </Modal>
            </Fragment>
        )
    }
}