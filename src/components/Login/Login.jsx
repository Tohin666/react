import React, { Component, Fragment } from 'react'

import './Login.css'

import { Modal, Button } from 'react-bootstrap'

export default class Login extends Component {
    render () {
        const {children} = this.props
        return (
            <Fragment>
                <Button>            
                    Login                
                </Button>
            </Fragment>
        )
    }
}